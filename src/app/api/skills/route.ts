import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET all skills
export const GET = async () => {
  const skills = await prisma.skill.findMany({
    include: { user: true },
    orderBy: { id: "desc" },
  });

  return NextResponse.json({
    message: "Skills fetched successfully",
    success: true,
    data: skills,
  });
};

// POST create new skill
export const POST = async (request: NextRequest) => {
  const data = await request.json();

  // Cek apakah userId valid
  const userExists = await prisma.user.findUnique({ where: { id: data.userId } });
  if (!userExists) {
    return NextResponse.json({
      message: "User tidak ditemukan",
      success: false,
    });
  }

  const skill = await prisma.skill.create({
    data: {
      userId: data.userId,
      name: data.name,
      level: data.level,
      iconUrl: data.iconUrl,
    },
  });

  return NextResponse.json({
    message: "Skill berhasil disimpan",
    success: true,
    data: skill,
  });
};
