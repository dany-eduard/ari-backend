-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "congregationId" INTEGER,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Congregation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,

    CONSTRAINT "Congregation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "congregationId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "congregationId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "baptism_date" TIMESTAMP(3),
    "sex" "Sex" NOT NULL,
    "is_elder" BOOLEAN NOT NULL DEFAULT false,
    "is_ministerial_servant" BOOLEAN NOT NULL DEFAULT false,
    "is_regular_pioneer" BOOLEAN NOT NULL DEFAULT false,
    "is_special_pioneer" BOOLEAN NOT NULL DEFAULT false,
    "is_field_missionary" BOOLEAN NOT NULL DEFAULT false,
    "is_other_sheep" BOOLEAN NOT NULL DEFAULT false,
    "is_anointed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublisherReport" (
    "id" SERIAL NOT NULL,
    "personId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "participated" BOOLEAN NOT NULL DEFAULT false,
    "bible_courses" INTEGER NOT NULL DEFAULT 0,
    "is_auxiliary_pioneer" BOOLEAN NOT NULL DEFAULT false,
    "hours" INTEGER NOT NULL DEFAULT 0,
    "notes" TEXT,

    CONSTRAINT "PublisherReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Congregation_name_code_key" ON "Congregation"("name", "code");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_congregationId_key" ON "Team"("name", "congregationId");

-- CreateIndex
CREATE UNIQUE INDEX "PublisherReport_personId_year_month_key" ON "PublisherReport"("personId", "year", "month");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_congregationId_fkey" FOREIGN KEY ("congregationId") REFERENCES "Congregation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_congregationId_fkey" FOREIGN KEY ("congregationId") REFERENCES "Congregation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_congregationId_fkey" FOREIGN KEY ("congregationId") REFERENCES "Congregation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublisherReport" ADD CONSTRAINT "PublisherReport_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
