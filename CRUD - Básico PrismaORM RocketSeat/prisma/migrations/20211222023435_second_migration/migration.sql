/*
  Warnings:

  - A unique constraint covering the columns `[fk_id_teacher]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teachersId]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_id_teacher` to the `courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teachersId` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "fk_id_teacher" TEXT NOT NULL,
ADD COLUMN     "teachersId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teachers_name_key" ON "teachers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_id_teacher_key" ON "courses"("fk_id_teacher");

-- CreateIndex
CREATE UNIQUE INDEX "courses_teachersId_key" ON "courses"("teachersId");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_id_teacher_fkey" FOREIGN KEY ("fk_id_teacher") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
