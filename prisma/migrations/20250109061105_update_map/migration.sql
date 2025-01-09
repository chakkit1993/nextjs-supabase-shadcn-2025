/*
  Warnings:

  - You are about to drop the column `firstName` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `eventOwner` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "eventOwner" TEXT NOT NULL,
ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lng" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL;
