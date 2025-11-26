import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET all projects
export const GET = async () => {
  const projects = await prisma.project.findMany({
    include: { user: true },
    orderBy: { id: "desc" },
  });

  return NextResponse.json({
    message: "Projects fetched successfully",
    success: true,
    data: projects,
  });
};

// POST create new project
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

  const project = await prisma.project.create({
    data: {
      userId: data.userId,
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
    },
  });

  return NextResponse.json({
    message: "Project berhasil disimpan",
    success: true,
    data: project,
  });
};
