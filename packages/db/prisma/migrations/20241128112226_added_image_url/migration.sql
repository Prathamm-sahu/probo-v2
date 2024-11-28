/*
  Warnings:

  - Added the required column `imageUrl` to the `OrderBook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderBook" ADD COLUMN     "imageUrl" TEXT NOT NULL;
