// backend/src/controllers/AuthController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
// Em produção, isso deve vir do arquivo .env
const SECRET_KEY = process.env.JWT_SECRET || 'dataelf-super-secret-key';

// REGISTRO DE USUÁRIO
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Preencha todos os campos.' });
    }

    // 1. Verifica se já existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Este e-mail já está em uso.' });
    }

    // 2. Criptografa a senha (Hash)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Salva no banco
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ 
      message: 'Usuário cadastrado com sucesso!', 
      userId: user.id 
    });

  } catch (error) {
    console.error("Erro no registro:", error);
    return res.status(500).json({ error: 'Erro interno ao registrar usuário.' });
  }
};

// LOGIN
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 1. Busca usuário pelo email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'E-mail ou senha inválidos.' });
    }

    // 2. Compara a senha enviada com o Hash do banco
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'E-mail ou senha inválidos.' });
    }

    // 3. Gera o Token JWT (O "Crachá")
    // O token expira em 1 dia
    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email }, 
      SECRET_KEY, 
      { expiresIn: '1d' } 
    );

    // 4. Retorna dados do usuário e o token
    return res.json({
      message: 'Login realizado!',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ error: 'Erro interno ao realizar login.' });
  }
};