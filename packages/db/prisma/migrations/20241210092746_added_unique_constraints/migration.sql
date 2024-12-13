/*
  Warnings:

  - You are about to drop the column `name` on the `Event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stockSymbol]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Event_stockSymbol_key" ON "Event"("stockSymbol");
