/*
  Warnings:

  - You are about to drop the column `baptismDate` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `birthDate` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `congregationId` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `isAnointed` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `isElder` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `isFieldMissionary` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `isMinisterialServant` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `isOtherSheep` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `isRegularPioneer` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `isSpecialPioneer` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `bibleCourses` on the `PublisherReport` table. All the data in the column will be lost.
  - You are about to drop the column `isAuxiliaryPioneer` on the `PublisherReport` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `PublisherReport` table. All the data in the column will be lost.
  - You are about to drop the column `congregationId` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `congregationId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[person_id,year,month]` on the table `PublisherReport` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,congregation_id]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birth_date` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `congregation_id` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team_id` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `person_id` to the `PublisherReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `congregation_id` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_congregationId_fkey";

-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_teamId_fkey";

-- DropForeignKey
ALTER TABLE "PublisherReport" DROP CONSTRAINT "PublisherReport_personId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_congregationId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_congregationId_fkey";

-- DropIndex
DROP INDEX "PublisherReport_personId_year_month_key";

-- DropIndex
DROP INDEX "Team_name_congregationId_key";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "baptismDate",
DROP COLUMN "birthDate",
DROP COLUMN "congregationId",
DROP COLUMN "firstName",
DROP COLUMN "isAnointed",
DROP COLUMN "isElder",
DROP COLUMN "isFieldMissionary",
DROP COLUMN "isMinisterialServant",
DROP COLUMN "isOtherSheep",
DROP COLUMN "isRegularPioneer",
DROP COLUMN "isSpecialPioneer",
DROP COLUMN "lastName",
DROP COLUMN "teamId",
ADD COLUMN     "baptism_date" TIMESTAMP(3),
ADD COLUMN     "birth_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "congregation_id" INTEGER NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "is_anointed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_elder" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_field_missionary" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_ministerial_servant" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_other_sheep" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_regular_pioneer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_special_pioneer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "team_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PublisherReport" DROP COLUMN "bibleCourses",
DROP COLUMN "isAuxiliaryPioneer",
DROP COLUMN "personId",
ADD COLUMN     "bible_courses" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "is_auxiliary_pioneer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "person_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "congregationId",
ADD COLUMN     "congregation_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "congregationId",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "congregation_id" INTEGER,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PublisherReport_person_id_year_month_key" ON "PublisherReport"("person_id", "year", "month");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_congregation_id_key" ON "Team"("name", "congregation_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_congregation_id_fkey" FOREIGN KEY ("congregation_id") REFERENCES "Congregation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_congregation_id_fkey" FOREIGN KEY ("congregation_id") REFERENCES "Congregation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_congregation_id_fkey" FOREIGN KEY ("congregation_id") REFERENCES "Congregation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublisherReport" ADD CONSTRAINT "PublisherReport_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
