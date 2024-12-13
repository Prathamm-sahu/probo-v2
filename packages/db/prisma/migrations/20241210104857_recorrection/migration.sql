/*
  Warnings:

  - You are about to drop the `UserExecutedOrder` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `investement` to the `NoOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `NoOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `investement` to the `YesOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `YesOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserExecutedOrder" DROP CONSTRAINT "UserExecutedOrder_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserExecutedOrder" DROP CONSTRAINT "UserExecutedOrder_userId_fkey";

-- AlterTable
ALTER TABLE "NoOrder" ADD COLUMN     "cancelled" BOOLEAN,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "investement" INTEGER NOT NULL,
ADD COLUMN     "rejected" BOOLEAN,
ADD COLUMN     "returns" INTEGER,
ADD COLUMN     "settled" BOOLEAN,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "YesOrder" ADD COLUMN     "cancelled" BOOLEAN,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "investement" INTEGER NOT NULL,
ADD COLUMN     "rejected" BOOLEAN,
ADD COLUMN     "returns" INTEGER,
ADD COLUMN     "settled" BOOLEAN,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "UserExecutedOrder";

-- DropEnum
DROP TYPE "OrderCategory";

-- AddForeignKey
ALTER TABLE "YesOrder" ADD CONSTRAINT "YesOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoOrder" ADD CONSTRAINT "NoOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
