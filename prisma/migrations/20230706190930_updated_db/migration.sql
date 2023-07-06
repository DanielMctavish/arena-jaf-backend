/*
  Warnings:

  - A unique constraint covering the columns `[userAdmId]` on the table `ArenaLocal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userColabId]` on the table `ArenaLocal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[arenaLocalId]` on the table `Machines` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userAdmId]` on the table `Machines` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userColabId]` on the table `Machines` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userClientId]` on the table `Sessions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[arenaLocalId]` on the table `Sessions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[machinesId]` on the table `Sessions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `UserAdm` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `UserColab` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `end_url_google` to the `ArenaLocal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `ArenaLocal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userAdmId` to the `ArenaLocal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arenaLocalId` to the `Machines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Machines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userAdmId` to the `Machines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arenaLocalId` to the `Sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `machinesId` to the `Sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userClientId` to the `Sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transaction_type` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saldo` to the `UserAdm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar_url` to the `UserClient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `UserClient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `UserClient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proprietario_id` to the `UserClient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saldo` to the `UserClient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `UserClient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar_url` to the `UserColab` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `UserColab` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `UserColab` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saldo` to the `UserColab` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `UserColab` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SESSION_STATUS" AS ENUM ('RUNNING', 'PAUSED');

-- CreateEnum
CREATE TYPE "TRANSACTION_TYPE" AS ENUM ('PRODUCT', 'CREDIT', 'SPLIT');

-- CreateEnum
CREATE TYPE "METHOD_PAYMENT" AS ENUM ('CREDITO', 'PIX');

-- CreateEnum
CREATE TYPE "STATUS_PAYMENT" AS ENUM ('APPROVED', 'PENDENT', 'CANCEL');

-- AlterTable
ALTER TABLE "ArenaLocal" ADD COLUMN     "end_url_google" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "userAdmId" TEXT NOT NULL,
ADD COLUMN     "userColabId" TEXT;

-- AlterTable
ALTER TABLE "Machines" ADD COLUMN     "arenaLocalId" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "userAdmId" TEXT NOT NULL,
ADD COLUMN     "userColabId" TEXT;

-- AlterTable
ALTER TABLE "Sessions" ADD COLUMN     "arenaLocalId" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "machinesId" TEXT NOT NULL,
ADD COLUMN     "status" "SESSION_STATUS" NOT NULL,
ADD COLUMN     "userClientId" TEXT NOT NULL,
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "method" "METHOD_PAYMENT" NOT NULL,
ADD COLUMN     "status" "STATUS_PAYMENT" NOT NULL,
ADD COLUMN     "transaction_type" "TRANSACTION_TYPE" NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "UserAdm" ADD COLUMN     "saldo" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "UserClient" ADD COLUMN     "avatar_url" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "proprietario_id" TEXT NOT NULL,
ADD COLUMN     "saldo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserColab" ADD COLUMN     "avatar_url" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "saldo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "url_img" TEXT NOT NULL,
    "disponiveis" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "sessionsId" TEXT,
    "arenaLocalId" TEXT NOT NULL,
    "proprietario_id" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_arenaLocalId_key" ON "Products"("arenaLocalId");

-- CreateIndex
CREATE UNIQUE INDEX "ArenaLocal_userAdmId_key" ON "ArenaLocal"("userAdmId");

-- CreateIndex
CREATE UNIQUE INDEX "ArenaLocal_userColabId_key" ON "ArenaLocal"("userColabId");

-- CreateIndex
CREATE UNIQUE INDEX "Machines_arenaLocalId_key" ON "Machines"("arenaLocalId");

-- CreateIndex
CREATE UNIQUE INDEX "Machines_userAdmId_key" ON "Machines"("userAdmId");

-- CreateIndex
CREATE UNIQUE INDEX "Machines_userColabId_key" ON "Machines"("userColabId");

-- CreateIndex
CREATE UNIQUE INDEX "Sessions_userClientId_key" ON "Sessions"("userClientId");

-- CreateIndex
CREATE UNIQUE INDEX "Sessions_arenaLocalId_key" ON "Sessions"("arenaLocalId");

-- CreateIndex
CREATE UNIQUE INDEX "Sessions_machinesId_key" ON "Sessions"("machinesId");

-- CreateIndex
CREATE UNIQUE INDEX "UserAdm_email_key" ON "UserAdm"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserColab_email_key" ON "UserColab"("email");

-- AddForeignKey
ALTER TABLE "ArenaLocal" ADD CONSTRAINT "ArenaLocal_userAdmId_fkey" FOREIGN KEY ("userAdmId") REFERENCES "UserAdm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArenaLocal" ADD CONSTRAINT "ArenaLocal_userColabId_fkey" FOREIGN KEY ("userColabId") REFERENCES "UserColab"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_userClientId_fkey" FOREIGN KEY ("userClientId") REFERENCES "UserClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_arenaLocalId_fkey" FOREIGN KEY ("arenaLocalId") REFERENCES "ArenaLocal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_machinesId_fkey" FOREIGN KEY ("machinesId") REFERENCES "Machines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_arenaLocalId_fkey" FOREIGN KEY ("arenaLocalId") REFERENCES "ArenaLocal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_sessionsId_fkey" FOREIGN KEY ("sessionsId") REFERENCES "Sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Machines" ADD CONSTRAINT "Machines_userAdmId_fkey" FOREIGN KEY ("userAdmId") REFERENCES "UserAdm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Machines" ADD CONSTRAINT "Machines_arenaLocalId_fkey" FOREIGN KEY ("arenaLocalId") REFERENCES "ArenaLocal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Machines" ADD CONSTRAINT "Machines_userColabId_fkey" FOREIGN KEY ("userColabId") REFERENCES "UserColab"("id") ON DELETE SET NULL ON UPDATE CASCADE;
