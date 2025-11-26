import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// GET all experiences
export const GET = async () => {
  const experiences = await prisma.experience.findMany({
    include: { user: true },
    orderBy: { id: "desc" },
  });

  return NextResponse.json({
    message: "Experiences fetched successfully",
    success: true,
    experiences,
  });
};

// POST create new experience
export const POST = async (request: NextRequest) => {
  const data = await request.json();

  // cek apakah userId valid
  const userExists = await prisma.user.findUnique({ where: { id: data.userId } });
  if (!userExists) {
    return NextResponse.json({
      message: "User tidak ditemukan",
      success: false,
    });
  }

  const experience = await prisma.experience.create({
    data: {
      userId: data.userId,
      title: data.title,
      company: data.company,
      duration: data.duration,
    },
  });

  return NextResponse.json({
    message: "Experience berhasil disimpan",
    success: true,
    experience,
  });
};
