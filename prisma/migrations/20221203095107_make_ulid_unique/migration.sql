/*
  Warnings:

  - A unique constraint covering the columns `[ulid]` on the table `ContactInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ulid]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ulid]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ulid]` on the table `SocialLink` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ContactInfo_ulid_key" ON "ContactInfo"("ulid");

-- CreateIndex
CREATE UNIQUE INDEX "Project_ulid_key" ON "Project"("ulid");

-- CreateIndex
CREATE UNIQUE INDEX "Review_ulid_key" ON "Review"("ulid");

-- CreateIndex
CREATE UNIQUE INDEX "SocialLink_ulid_key" ON "SocialLink"("ulid");
