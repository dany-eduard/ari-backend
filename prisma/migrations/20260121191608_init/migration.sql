-- CreateEnum
CREATE TYPE "Action" AS ENUM ('CREATE', 'UPDATE', 'DELETE');

-- CreateTable
CREATE TABLE "LogAction" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "action" "Action" NOT NULL,
    "entity" TEXT NOT NULL,
    "entity_id" INTEGER,
    "before" JSONB,
    "after" JSONB,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogAction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LogAction_user_id_idx" ON "LogAction"("user_id");

-- CreateIndex
CREATE INDEX "LogAction_entity_entity_id_idx" ON "LogAction"("entity", "entity_id");

-- CreateIndex
CREATE INDEX "LogAction_action_idx" ON "LogAction"("action");

-- CreateIndex
CREATE INDEX "LogAction_createdAt_idx" ON "LogAction"("createdAt");

-- AddForeignKey
ALTER TABLE "LogAction" ADD CONSTRAINT "LogAction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
