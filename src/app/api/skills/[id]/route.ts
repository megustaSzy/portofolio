import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// =====================
// GET SKILL BY ID
// =====================
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const skillId = Number(id);

    if (isNaN(skillId)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    const skill = await prisma.skill.findUnique({
      where: { id: skillId },
      include: { user: true },
    });

    if (!skill) {
      return NextResponse.json(
        { success: false, message: "Skill tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Skill ditemukan", data: skill },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengambil skill",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// =====================
// PUT UPDATE SKILL
// =====================
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const skillId = Number(id);

    if (isNaN(skillId)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    const data = await request.json();

    const check = await prisma.skill.findUnique({ where: { id: skillId } });

    if (!check) {
      return NextResponse.json(
        { success: false, message: "Skill tidak ditemukan" },
        { status: 404 }
      );
    }

    const updatedSkill = await prisma.skill.update({
      where: { id: skillId },
      data: {
        name: data.name,
        level: data.level,
        iconUrl: data.iconUrl,
      },
    });

    return NextResponse.json(
      { success: true, message: "Skill berhasil diubah", data: updatedSkill },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengupdate skill",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// =====================
// DELETE SKILL
// =====================
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const skillId = Number(id);

    if (isNaN(skillId)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    const check = await prisma.skill.findUnique({ where: { id: skillId } });

    if (!check) {
      return NextResponse.json(
        { success: false, message: "Skill tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.skill.delete({ where: { id: skillId } });

    return NextResponse.json(
      { success: true, message: "Skill berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal menghapus skill",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
