import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const educationId = Number(id);

    if (isNaN(educationId)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    const education = await prisma.education.findUnique({
      where: { id: educationId },
      include: { user: true },
    });

    if (!education) {
      return NextResponse.json(
        { success: false, message: "Education record tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Education record ditemukan", data: education },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengambil education record",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// =====================
// PUT UPDATE EDUCATION
// =====================
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const educationId = Number(id);

    if (isNaN(educationId)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    const data = await request.json();

    const check = await prisma.education.findUnique({
      where: { id: educationId },
    });

    if (!check) {
      return NextResponse.json(
        { success: false, message: "Education record tidak ditemukan" },
        { status: 404 }
      );
    }

    const updatedEducation = await prisma.education.update({
      where: { id: educationId },
      data: {
        institution: data.institution,
        degree: data.degree,
        startYear: data.startYear,
        endYear: data.endYear,
        certificateUrl: data.certificateUrl,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Education record berhasil diubah",
        data: updatedEducation,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengupdate education record",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// =====================
// DELETE EDUCATION
// =====================
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const educationId = Number(id);

    if (isNaN(educationId)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    const check = await prisma.education.findUnique({
      where: { id: educationId },
    });

    if (!check) {
      return NextResponse.json(
        { success: false, message: "Education record tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.education.delete({ where: { id: educationId } });

    return NextResponse.json(
      { success: true, message: "Education record berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal menghapus education record",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
