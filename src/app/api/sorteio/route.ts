import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { nome, whatsapp, interesse, email, role, company, objetivo } = await req.json();
    if (!nome || !whatsapp || !interesse || !email || !objetivo) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const cadastro = await prisma.sorteio.create({
      data: { nome, whatsapp, interesse, email, role, company, objetivo },
    });

    return NextResponse.json(cadastro, { status: 201 });
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    return NextResponse.json(
      { error: "Erro ao cadastrar participante." },
      { status: 500 }
    );
  }
}
