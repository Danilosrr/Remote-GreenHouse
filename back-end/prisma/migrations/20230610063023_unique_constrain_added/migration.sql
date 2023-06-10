/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Sensors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Sensors_name_key" ON "Sensors"("name");
