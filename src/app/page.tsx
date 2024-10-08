import Link from "next/link";
import { db } from '~/server/db';
import {images} from '~/server/db/schema'
import {  SignedOut, SignedIn} from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className='flex w-48 flex-col'>
          <img src={image.url} alt={image.name} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}


export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sing in above!</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
