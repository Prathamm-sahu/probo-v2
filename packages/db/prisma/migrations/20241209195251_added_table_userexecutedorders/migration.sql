/*
  Warnings:

  - You are about to drop the column `stockBalance` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `OrderBook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NoOrder" DROP CONSTRAINT "NoOrder_orderBookId_fkey";

-- DropForeignKey
ALTER TABLE "YesOrder" DROP CONSTRAINT "YesOrder_orderBookId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "stockBalance";

-- DropTable
DROP TABLE "OrderBook";

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stockSymbol" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "eventType" "EventType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserExecutedOrder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "orderType" "OrderType" NOT NULL,
    "investement" INTEGER NOT NULL,
    "returns" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "settled" BOOLEAN,
    "cancelled" BOOLEAN,
    "rejected" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserExecutedOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "YesOrder" ADD CONSTRAINT "YesOrder_orderBookId_fkey" FOREIGN KEY ("orderBookId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoOrder" ADD CONSTRAINT "NoOrder_orderBookId_fkey" FOREIGN KEY ("orderBookId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserExecutedOrder" ADD CONSTRAINT "UserExecutedOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserExecutedOrder" ADD CONSTRAINT "UserExecutedOrder_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
