/*
  Warnings:

  - You are about to drop the column `teachersId` on the `courses` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "courses_teachersId_key";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "teachersId";
