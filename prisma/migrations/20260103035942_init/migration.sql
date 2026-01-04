/*
  Warnings:

  - You are about to drop the column `baptism_date` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `birth_date` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `is_anointed` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `is_elder` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `is_field_missionary` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `is_ministerial_servant` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `is_other_sheep` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `is_regular_pioneer` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `is_special_pioneer` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `bible_courses` on the `PublisherReport` table. All the data in the column will be lost.
  - You are about to drop the column `is_auxiliary_pioneer` on the `PublisherReport` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" DROP COLUMN "baptism_date",
DROP COLUMN "birth_date",
DROP COLUMN "first_name",
DROP COLUMN "is_anointed",
DROP COLUMN "is_elder",
DROP COLUMN "is_field_missionary",
DROP COLUMN "is_ministerial_servant",
DROP COLUMN "is_other_sheep",
DROP COLUMN "is_regular_pioneer",
DROP COLUMN "is_special_pioneer",
DROP COLUMN "last_name",
ADD COLUMN     "baptismDate" TIMESTAMP(3),
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "isAnointed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isElder" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isFieldMissionary" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isMinisterialServant" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isOtherSheep" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isRegularPioneer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isSpecialPioneer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PublisherReport" DROP COLUMN "bible_courses",
DROP COLUMN "is_auxiliary_pioneer",
ADD COLUMN     "bibleCourses" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "isAuxiliaryPioneer" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;
