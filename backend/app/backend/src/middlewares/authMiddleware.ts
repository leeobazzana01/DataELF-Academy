// backend/src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'dataelf-super-secret-key';

// Interface para podermos adicionar "req.user" sem o TypeScript reclamar
export interface AuthRequest extends Request {
  user?: any;
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  // O token vem no cabeçalho assim: "Bearer eyJhbGci..."
  const authHeader = req.headers['authorization'];
  
  // Pegamos apenas a parte do código (removemos o "Bearer ")
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Faça login para continuar.' });
  }

  try {
    // Verifica a assinatura do token
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified; // Adiciona os dados do usuário na requisição
    next(); // Pode passar!
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido ou expirado.' });
  }
};