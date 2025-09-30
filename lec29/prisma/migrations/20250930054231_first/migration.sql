-- CreateTable
CREATE TABLE "public"."tweet" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tweet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."tweet" ADD CONSTRAINT "tweet_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
