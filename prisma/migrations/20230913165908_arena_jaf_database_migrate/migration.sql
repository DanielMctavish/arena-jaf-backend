-- CreateEnum
CREATE TYPE "SESSION_STATUS" AS ENUM ('RUNNING', 'PAUSED');

-- CreateEnum
CREATE TYPE "TRANSACTION_TYPE" AS ENUM ('PRODUCT', 'MACHINE_CREDIT', 'SPLIT');

-- CreateEnum
CREATE TYPE "METHOD_PAYMENT" AS ENUM ('CREDITO', 'PIX');

-- CreateEnum
CREATE TYPE "STATUS_PAYMENT" AS ENUM ('APPROVED', 'PENDENT', 'CANCEL');

-- CreateTable
CREATE TABLE "UserAdm" (
    "id" TEXT NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAdm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserColab" (
    "id" TEXT NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,

    CONSTRAINT "UserColab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArenaLocal" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "end_url_google" TEXT NOT NULL,
    "userAdmId" TEXT NOT NULL,
    "userColabId" TEXT,

    CONSTRAINT "ArenaLocal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessions" (
    "id" TEXT NOT NULL,
    "proprietario_id" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "userClientId" TEXT NOT NULL,
    "status" "SESSION_STATUS" NOT NULL,
    "arenaLocalId" TEXT NOT NULL,
    "machineId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sessions_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL,
    "payer_id" TEXT NOT NULL,
    "benefited_id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "transaction_type" "TRANSACTION_TYPE" NOT NULL,
    "product_description" TEXT,
    "method" "METHOD_PAYMENT" NOT NULL,
    "status" "STATUS_PAYMENT" NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserClient" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "proprietario_id" TEXT NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,

    CONSTRAINT "UserClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Machines" (
    "id" TEXT NOT NULL,
    "nano_id" TEXT NOT NULL,
    "arenaLocalId" TEXT NOT NULL,
    "userAdmId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "userColabId" TEXT,

    CONSTRAINT "Machines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAdm_email_key" ON "UserAdm"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserColab_email_key" ON "UserColab"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ArenaLocal_userColabId_key" ON "ArenaLocal"("userColabId");

-- AddForeignKey
ALTER TABLE "ArenaLocal" ADD CONSTRAINT "ArenaLocal_userAdmId_fkey" FOREIGN KEY ("userAdmId") REFERENCES "UserAdm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArenaLocal" ADD CONSTRAINT "ArenaLocal_userColabId_fkey" FOREIGN KEY ("userColabId") REFERENCES "UserColab"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_userClientId_fkey" FOREIGN KEY ("userClientId") REFERENCES "UserClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_arenaLocalId_fkey" FOREIGN KEY ("arenaLocalId") REFERENCES "ArenaLocal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
