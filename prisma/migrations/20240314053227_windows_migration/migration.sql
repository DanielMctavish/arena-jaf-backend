-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_local_id_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_session_id_fkey";

-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "local_id" DROP NOT NULL,
ALTER COLUMN "session_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "ArenaLocal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
