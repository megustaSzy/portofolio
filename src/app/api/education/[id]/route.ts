import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// GET user by id
export const GET = async (_: NextRequest, { params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const user = await prisma.user.findUnique({
    where: { id },
    include: { skills: true, projects: true, experiences: true, education: true },
  });

  if (!user)
    return NextResponse.json({ message: "User tidak ditemukan", success: false });

  return NextResponse.json({ message: "User ditemukan", success: true, user });
};

// PUT update user
export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const data = await request.json();

  const updatedUser = await prisma.user.update({
    where: { id },
    data: { name: data.name, profession: data.profession, email: data.email },
  });

  return NextResponse.json({ message: "User berhasil diubah", success: true, user: updatedUser });
};

// DELETE user
export const DELETE = async (_: NextRequest, { params }: { params: { id: string } }) => {
  const id = Number(params.id);

  const check = await prisma.user.findUnique({ where: { id } });
  if (!check)
    return NextResponse.json({ message: "User tidak ditemukan", success: false });

  await prisma.user.delete({ where: { id } });
  return NextResponse.json({ message: "User berhasil dihapus", success: true });
};
