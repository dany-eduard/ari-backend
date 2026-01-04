/*
  Warnings:

  - Made the column `congregation_id` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_congregation_id_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "congregation_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_congregation_id_fkey" FOREIGN KEY ("congregation_id") REFERENCES "Congregation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
