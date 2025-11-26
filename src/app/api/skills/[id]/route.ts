import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET skill by id
export const GET = async (_: NextRequest, { params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const skill = await prisma.skill.findUnique({ where: { id }, include: { user: true } });

  if (!skill)
    return NextResponse.json({ message: "Skill tidak ditemukan", success: false });

  return NextResponse.json({ message: "Skill ditemukan", success: true, skill });
};

// PUT update skill
export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const data = await request.json();

  const updatedSkill = await prisma.skill.update({
    where: { id },
    data: {
      name: data.name,
      level: data.level,
      iconUrl: data.iconUrl,
    },
  });

  return NextResponse.json({
    message: "Skill berhasil diubah",
    success: true,
    data: updatedSkill,
  });
};

// DELETE skill
export const DELETE = async (_: NextRequest, { params }: { params: { id: string } }) => {
  const id = Number(params.id);

  const check = await prisma.skill.findUnique({ where: { id } });
  if (!check)
    return NextResponse.json({ message: "Skill tidak ditemukan", success: false });

  await prisma.skill.delete({ where: { id } });

  return NextResponse.json({ message: "Skill berhasil dihapus", success: true });
};
