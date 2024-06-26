/*
  Warnings:

  - Added the required column `adderess` to the `Recipient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Recipient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pohne` to the `Recipient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `recipient` ADD COLUMN `adderess` VARCHAR(191) NOT NULL,
    ADD COLUMN `cep` VARCHAR(191) NOT NULL,
    ADD COLUMN `pohne` VARCHAR(191) NOT NULL;
