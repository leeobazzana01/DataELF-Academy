import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany({
      include: {
        chapters: {
          orderBy: { order: 'asc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.status(200).json(books);
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    res.status(500).json({ error: "Erro interno ao buscar livros" });
  }
};