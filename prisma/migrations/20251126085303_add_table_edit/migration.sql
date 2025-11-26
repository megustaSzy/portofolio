-- AlterTable
ALTER TABLE "Education" ADD COLUMN     "certificateUrl" TEXT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "iconUrl" TEXT,
ADD COLUMN     "level" TEXT;
