/*
  Warnings:

  - You are about to drop the column `cancelled` on the `NoOrder` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `NoOrder` table. All the data in the column will be lost.
  - You are about to drop the column `investement` on the `NoOrder` table. All the data in the column will be lost.
  - You are about to drop the column `orderType` on the `NoOrder` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `NoOrder` table. All the data in the column will be lost.
  - You are about to drop the column `rejected` on the `NoOrder` table. All the data in the column will be lost.
  - You are about to drop the column `returns` on the `NoOrder` table. All the data in the column will be lost.
  - You are about to drop the column `settled` on the `NoOrder` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `NoOrder` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `NoOrder` table. All the data in the column will be lost.
  - You are about to drop the column `cancelled` on the `YesOrder` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `YesOrder` table. All the data in the column will be lost.
  - You are about to drop the column `investement` on the `YesOrder` table. All the data in the column will be lost.
  - You are about to drop the column `orderType` on the `YesOrder` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `YesOrder` table. All the data in the column will be lost.
  - You are about to drop the column `rejected` on the `YesOrder` table. All the data in the column will be lost.
  - You are about to drop the column `returns` on the `YesOrder` table. All the data in the column will be lost.
  - You are about to drop the column `settled` on the `YesOrder` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `YesOrder` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `YesOrder` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[eventId]` on the table `NoOrder` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventId]` on the table `YesOrder` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reverseOrdersTotalQuantity` to the `NoOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalQuantity` to the `NoOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reverseOrdersTotalQuantity` to the `YesOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalQuantity` to the `YesOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "NoOrder" DROP CONSTRAINT "NoOrder_userId_fkey";

-- DropForeignKey
ALTER TABLE "YesOrder" DROP CONSTRAINT "YesOrder_userId_fkey";

-- AlterTable
ALTER TABLE "NoOrder" DROP COLUMN "cancelled",
DROP COLUMN "createdAt",
DROP COLUMN "investement",
DROP COLUMN "orderType",
DROP COLUMN "quantity",
DROP COLUMN "rejected",
DROP COLUMN "returns",
DROP COLUMN "settled",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "reverseOrdersTotalQuantity" INTEGER NOT NULL,
ADD COLUMN     "totalQuantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "YesOrder" DROP COLUMN "cancelled",
DROP COLUMN "createdAt",
DROP COLUMN "investement",
DROP COLUMN "orderType",
DROP COLUMN "quantity",
DROP COLUMN "rejected",
DROP COLUMN "returns",
DROP COLUMN "settled",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "reverseOrdersTotalQuantity" INTEGER NOT NULL,
ADD COLUMN     "totalQuantity" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "UserYesOrder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "yesOrderId" TEXT NOT NULL,

    CONSTRAINT "UserYesOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReverseUserYesOrder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "yesOrderId" TEXT NOT NULL,

    CONSTRAINT "ReverseUserYesOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserNoOrder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "noOrderId" TEXT NOT NULL,

    CONSTRAINT "UserNoOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReverseUserNoOrder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "noOrderId" TEXT NOT NULL,

    CONSTRAINT "ReverseUserNoOrder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserYesOrder_userId_yesOrderId_key" ON "UserYesOrder"("userId", "yesOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "ReverseUserYesOrder_userId_yesOrderId_key" ON "ReverseUserYesOrder"("userId", "yesOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "UserNoOrder_userId_noOrderId_key" ON "UserNoOrder"("userId", "noOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "ReverseUserNoOrder_userId_noOrderId_key" ON "ReverseUserNoOrder"("userId", "noOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "NoOrder_eventId_key" ON "NoOrder"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "YesOrder_eventId_key" ON "YesOrder"("eventId");

-- AddForeignKey
ALTER TABLE "UserYesOrder" ADD CONSTRAINT "UserYesOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserYesOrder" ADD CONSTRAINT "UserYesOrder_yesOrderId_fkey" FOREIGN KEY ("yesOrderId") REFERENCES "YesOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReverseUserYesOrder" ADD CONSTRAINT "ReverseUserYesOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReverseUserYesOrder" ADD CONSTRAINT "ReverseUserYesOrder_yesOrderId_fkey" FOREIGN KEY ("yesOrderId") REFERENCES "YesOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNoOrder" ADD CONSTRAINT "UserNoOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNoOrder" ADD CONSTRAINT "UserNoOrder_noOrderId_fkey" FOREIGN KEY ("noOrderId") REFERENCES "NoOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReverseUserNoOrder" ADD CONSTRAINT "ReverseUserNoOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReverseUserNoOrder" ADD CONSTRAINT "ReverseUserNoOrder_noOrderId_fkey" FOREIGN KEY ("noOrderId") REFERENCES "NoOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
