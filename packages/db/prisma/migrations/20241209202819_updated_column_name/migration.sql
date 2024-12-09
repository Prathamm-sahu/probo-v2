/*
  Warnings:

  - You are about to drop the column `orderBookId` on the `NoOrder` table. All the data in the column will be lost.
  - You are about to drop the column `orderBookId` on the `YesOrder` table. All the data in the column will be lost.
  - Added the required column `eventId` to the `NoOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `YesOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "NoOrder" DROP CONSTRAINT "NoOrder_orderBookId_fkey";

-- DropForeignKey
ALTER TABLE "YesOrder" DROP CONSTRAINT "YesOrder_orderBookId_fkey";

-- AlterTable
ALTER TABLE "NoOrder" DROP COLUMN "orderBookId",
ADD COLUMN     "eventId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "YesOrder" DROP COLUMN "orderBookId",
ADD COLUMN     "eventId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "YesOrder" ADD CONSTRAINT "YesOrder_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoOrder" ADD CONSTRAINT "NoOrder_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
