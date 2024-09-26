import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId", userId: "yourUserID" }); // Реализуйте соответствующую аутентификацию
 
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = await auth(req);

      if (!user.userId) throw new UploadThingError("Unauthorized");

      return { userId: user.userId}; // Возвращаем значение как metadata
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for user:", metadata.userId);

      await db.insert(images).values({
        userId: metadata.userId,
        name: file.name,
        url: file.url,
      });

      console.log("file url:", file.url);

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;