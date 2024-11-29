-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "EventType" ADD VALUE 'KABADDI';
ALTER TYPE "EventType" ADD VALUE 'ELECTIONS';
ALTER TYPE "EventType" ADD VALUE 'YOUTUBE';
ALTER TYPE "EventType" ADD VALUE 'ECONOMY';
ALTER TYPE "EventType" ADD VALUE 'BASKETBALL';
ALTER TYPE "EventType" ADD VALUE 'MOTORSPORTS';
ALTER TYPE "EventType" ADD VALUE 'TENNIS';
