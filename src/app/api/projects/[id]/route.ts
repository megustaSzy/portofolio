import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET project by id
export const GET = async (_: NextRequest, { params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const project = await prisma.project.findUnique({
    where: { id },
    include: { user: true },
  });

  if (!project)
    return NextResponse.json({ message: "Project tidak ditemukan", success: false });

  return NextResponse.json({ message: "Project ditemukan", success: true, project });
};

// PUT update project
export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const data = await request.json();

  const updatedProject = await prisma.project.update({
    where: { id },
    data: {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
    },
  });

  return NextResponse.json({
    message: "Project berhasil diubah",
    success: true,
    data: updatedProject,
  });
};

// DELETE project
export const DELETE = async (_: NextRequest, { params }: { params: { id: string } }) => {
  const id = Number(params.id);

  const check = await prisma.project.findUnique({ where: { id } });
  if (!check)
    return NextResponse.json({ message: "Project tidak ditemukan", success: false });

  await prisma.project.delete({ where: { id } });

  return NextResponse.json({ message: "Project berhasil dihapus", success: true });
};
