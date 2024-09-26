CREATE TABLE IF NOT EXISTS "t3gallery_image" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(1024) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
DROP TABLE "t3gallery_post";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "t3gallery_image" USING btree ("name");