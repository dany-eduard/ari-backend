-- AlterTable
ALTER TABLE "LogAction" ADD COLUMN     "congregation_id" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "LogAction_congregation_id_idx" ON "LogAction"("congregation_id");