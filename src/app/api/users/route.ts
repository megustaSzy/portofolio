import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async() => {
    const users = await prisma.user.findMany({
        include: {
            skills: true,
            projects: true,
            experiences: true,
            education: true
        },
        orderBy: {
            id: 'desc'
        }
    });

    return NextResponse.json(
        {
        message: "users fetched succesfully",
        success: true,
        data: users
        },
        {
            status: 200
        }
    )
}

export const POST = async(req: NextRequest) => {
    const data = await req.json();

    const check = await prisma.user.findFirst({
        where: {
            email: data.email
        },
        select: {
            id: true
        }
    });

    if(check) {
        return NextResponse.json(
            {
                mesage: "user gagal disimpan, email sudah ada",
                success: false
            },
            {
                status: 409
            }
        )
    }

    const user = await prisma.user.create({
        data:{
            name: data.name,
            profession: data.profession,
            email: data.email,
        }
    });

    return NextResponse.json(
        {
            message: "user berhasil disimpan",
            success: true,
            data: user
        },
        {
            status: 201
        }
    )
}