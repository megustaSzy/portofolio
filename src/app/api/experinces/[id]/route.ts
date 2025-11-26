import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// =====================
// GET EXPERIENCE BY ID
// =====================
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const experienceId = Number(id);

    if (isNaN(experienceId)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    const experience = await prisma.experience.findUnique({
      where: { id: experienceId },
      include: { user: true },
    });

    if (!experience) {
      return NextResponse.json(
        { success: false, message: "Experience tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Experience ditemukan", data: experience },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengambil experience",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// =====================
// PUT UPDATE EXPERIENCE
// =====================
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const experienceId = Number(id);

    if (isNaN(experienceId)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    const data = await request.json();

    const check = await prisma.experience.findUnique({
      where: { id: experienceId },
    });

    if (!check) {
      return NextResponse.json(
        { success: false, message: "Experience tidak ditemukan" },
        { status: 404 }
      );
    }

    const updatedExperience = await prisma.experience.update({
      where: { id: experienceId },
      data: {
        title: data.title,
        company: data.company,
        duration: data.duration,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Experience berhasil diubah",
        data: updatedExperience,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengupdate experience",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// =====================
// DELETE EXPERIENCE
// =====================
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const experienceId = Number(id);

    if (isNaN(experienceId)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    const check = await prisma.experience.findUnique({
      where: { id: experienceId },
    });

    if (!check) {
      return NextResponse.json(
        { success: false, message: "Experience tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.experience.delete({ where: { id: experienceId } });

    return NextResponse.json(
      { success: true, message: "Experience berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal menghapus experience",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
