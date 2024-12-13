/*
  Warnings:

  - You are about to drop the column `orderType` on the `UserExecutedOrder` table. All the data in the column will be lost.
  - Added the required column `orderCategory` to the `UserExecutedOrder` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderCategory" AS ENUM ('YES', 'NO');

-- AlterTable
ALTER TABLE "UserExecutedOrder" DROP COLUMN "orderType",
ADD COLUMN     "orderCategory" "OrderCategory" NOT NULL;
