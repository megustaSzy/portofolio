import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET all education records
export const GET = async () => {
  const education = await prisma.education.findMany({
    include: { user: true },
    orderBy: { id: "desc" },
  });

  return NextResponse.json({
    message: "Education records fetched successfully",
    success: true,
    education,
  });
};

// POST create new education record
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

  const newEducation = await prisma.education.create({
    data: {
      userId: data.userId,
      institution: data.institution,
      degree: data.degree,
      startYear: data.startYear,
      endYear: data.endYear,
      certificateUrl: data.certificateUrl,
    },
  });

  return NextResponse.json({
    message: "Education record berhasil disimpan",
    success: true,
    education: newEducation,
  });
};
