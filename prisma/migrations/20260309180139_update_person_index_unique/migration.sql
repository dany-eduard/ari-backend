/*
  Warnings:

  - A unique constraint covering the columns `[congregation_id,first_name,last_name,birth_date,sex,deletedAt]` on the table `Person` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Person_congregation_id_first_name_last_name_birth_date_sex_key";

-- CreateIndex
CREATE UNIQUE INDEX "Person_congregation_id_first_name_last_name_birth_date_sex__key" ON "Person"("congregation_id", "first_name", "last_name", "birth_date", "sex", "deletedAt");
