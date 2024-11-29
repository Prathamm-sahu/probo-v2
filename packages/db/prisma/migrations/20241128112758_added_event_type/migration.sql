/*
  Warnings:

  - Added the required column `eventType` to the `OrderBook` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('CRICKET', 'CRYPTO', 'FOOTBALL', 'STOCKS', 'CHESS', 'NEWS');

-- AlterTable
ALTER TABLE "OrderBook" ADD COLUMN     "eventType" "EventType" NOT NULL;
