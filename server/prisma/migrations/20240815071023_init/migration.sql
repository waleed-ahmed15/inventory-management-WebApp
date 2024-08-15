/*
  Warnings:

  - You are about to drop the `PurchaesSummary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PurchaesSummary";

-- CreateTable
CREATE TABLE "PurchaseSummary" (
    "purchaseSummaryId" TEXT NOT NULL,
    "totalPurchased" DOUBLE PRECISION NOT NULL,
    "changePercentage" DOUBLE PRECISION,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseSummary_pkey" PRIMARY KEY ("purchaseSummaryId")
);
