import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 1. Buscar Livros E os dados do Conceito (Título e Cor)
export const getBooksByConcept = async (req: Request, res: Response) => {
  const { conceptId } = req.params;

  try {
    // Buscamos o CONCEITO e incluímos seus livros
    const concept = await prisma.concept.findUnique({
      where: { id: conceptId },
      include: {
        books: {
          // 👇 AQUI ESTÁ A MUDANÇA MÁGICA
          orderBy: { order: 'asc' }, 
          // Antes estava: { title: 'asc' }
          
          include: {
            _count: { select: { chapters: true } }
          }
        }
      }
    });

    if (!concept) {
      return res.status(404).json({ error: "Conceito não encontrado" });
    }

    // Retornamos tudo junto
    res.json(concept);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar livros do conceito" });
  }
};

// 2. Buscar Detalhes do Livro + Capítulos + Progresso + Dados do Conceito (Cor)
export const getBookDetails = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const { userId } = req.query;

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: "UserId é obrigatório" });
  }

  try {
    const book = await prisma.book.findUnique({
      where: { id: bookId },
      include: {
        concept: true, // <--- IMPORTANTE: Traz a cor do conceito para a tela de capítulos
        chapters: {
          orderBy: { order: 'asc' }, // Isso já estava correto para os capítulos!
          include: {
            usersCompleted: {
              where: { userId: userId },
              select: { completedAt: true }
            }
          }
        }
      }
    });

    if (!book) return res.status(404).json({ error: "Livro não encontrado" });

    // Lógica para transformar o array usersCompleted em um booleano isCompleted
    const chaptersWithProgress = book.chapters.map(chapter => ({
      ...chapter,
      usersCompleted: undefined,
      isCompleted: chapter.usersCompleted.length > 0
    }));

    // Retorna o livro com os capítulos processados
    res.json({ ...book, chapters: chaptersWithProgress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar detalhes do livro" });
  }
};

// 3. Alternar Progresso
export const toggleChapterProgress = async (req: Request, res: Response) => {
  const { userId, chapterId } = req.body;

  try {
    const existingProgress = await prisma.userProgress.findUnique({
      where: { userId_chapterId: { userId, chapterId } }
    });

    if (existingProgress) {
      await prisma.userProgress.delete({ where: { id: existingProgress.id } });
      return res.json({ completed: false });
    } else {
      await prisma.userProgress.create({ data: { userId, chapterId } });
      return res.json({ completed: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar progresso" });
  }
};