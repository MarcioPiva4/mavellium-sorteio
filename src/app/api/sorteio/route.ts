import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { nome, whatsapp, interesse } = await req.json();

    if (!nome || !whatsapp || !interesse) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const cadastro = await prisma.sorteio.create({
      data: { nome, whatsapp, interesse },
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
