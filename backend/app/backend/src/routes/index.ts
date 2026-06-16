import { Router } from 'express';
import authRoutes from './authRoutes';
import bookRoutes from './bookRoutes';
import robotRoutes from './robotRoutes'; // Mantive o seu arquivo existente

const router = Router();

// Conecta as rotas filhas
router.use('/auth', authRoutes); // As rotas de login ficarão em /api/auth/login
router.use('/', bookRoutes);     // As rotas de livros ficam na raiz da api: /api/books/...
router.use('/robot', robotRoutes); // Exemplo (se houver)

export default router;