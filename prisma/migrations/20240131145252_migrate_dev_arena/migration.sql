/*
  Warnings:

  - You are about to drop the column `status` on the `Machines` table. All the data in the column will be lost.
  - You are about to drop the column `arenaLocalId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `disponiveis` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `proprietario_id` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `sessionsId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `arenaLocalId` on the `Sessions` table. All the data in the column will be lost.
  - You are about to drop the column `machineId` on the `Sessions` table. All the data in the column will be lost.
  - You are about to drop the column `proprietario_id` on the `Sessions` table. All the data in the column will be lost.
  - You are about to drop the column `userClientId` on the `Sessions` table. All the data in the column will be lost.
  - Added the required column `available` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `local_id` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `session_id` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adm_id` to the `Sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `Sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `local_id` to the `Sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `machine_id` to the `Sessions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_arenaLocalId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_sessionsId_fkey";

-- DropForeignKey
ALTER TABLE "Sessions" DROP CONSTRAINT "Sessions_arenaLocalId_fkey";

-- DropForeignKey
ALTER TABLE "Sessions" DROP CONSTRAINT "Sessions_machineId_fkey";

-- DropForeignKey
ALTER TABLE "Sessions" DROP CONSTRAINT "Sessions_userClientId_fkey";

-- AlterTable
ALTER TABLE "Machines" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "arenaLocalId",
DROP COLUMN "disponiveis",
DROP COLUMN "nome",
DROP COLUMN "proprietario_id",
DROP COLUMN "sessionsId",
ADD COLUMN     "available" INTEGER NOT NULL,
ADD COLUMN     "local_id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "owner_id" TEXT NOT NULL,
ADD COLUMN     "session_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sessions" DROP COLUMN "arenaLocalId",
DROP COLUMN "machineId",
DROP COLUMN "proprietario_id",
DROP COLUMN "userClientId",
ADD COLUMN     "adm_id" TEXT NOT NULL,
ADD COLUMN     "client_id" TEXT NOT NULL,
ADD COLUMN     "local_id" TEXT NOT NULL,
ADD COLUMN     "machine_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_adm_id_fkey" FOREIGN KEY ("adm_id") REFERENCES "UserAdm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "UserClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "ArenaLocal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_machine_id_fkey" FOREIGN KEY ("machine_id") REFERENCES "Machines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "ArenaLocal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
