/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Recipient` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Recipient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `recipient` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Recipient_email_key` ON `Recipient`(`email`);
