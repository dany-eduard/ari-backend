/*
  Warnings:

  - A unique constraint covering the columns `[congregation_id,first_name,last_name,birth_date,sex]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[person_id,service_year,year,month]` on the table `PublisherReport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `service_year` to the `PublisherReport` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "PublisherReport_person_id_year_month_key";

-- AlterTable
ALTER TABLE "PublisherReport" ADD COLUMN     "service_year" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Person_congregation_id_first_name_last_name_birth_date_sex_key" ON "Person"("congregation_id", "first_name", "last_name", "birth_date", "sex");

-- CreateIndex
CREATE UNIQUE INDEX "PublisherReport_person_id_service_year_year_month_key" ON "PublisherReport"("person_id", "service_year", "year", "month");
