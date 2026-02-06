import { Router } from 'express';
import authRoutes from './authRoutes';
import bookRoutes from './bookRoutes'; 
import robotRoutes from './robotRoutes';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

// 1. Rotas Públicas (Qualquer um acessa)
router.use('/auth', authRoutes);   // /api/auth/login
router.use('/robot', robotRoutes); // /api/robot/action (Deixei público para facilitar testes, mas pode proteger depois)

// 2. Rotas Privadas (O Porteiro barra se não tiver Token)
// O middleware 'authenticateToken' protege tudo que estiver abaixo
router.use('/books', authenticateToken, bookRoutes); 

export default router;