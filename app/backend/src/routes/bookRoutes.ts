import { Router } from 'express';
import { 
  getBooksByConcept, 
  getBookDetails, 
  toggleChapterProgress 
} from '../controllers/BookController';

const router = Router();

// ==========================================
// 📖 ROTAS DE LEITURA (GET)
// ==========================================

// 1. Rota exata que o frontend busca: /concepts/:id/books
// IMPORTANTE: Isso cria a URL /api/concepts/math/books
router.get('/concepts/:conceptId/books', getBooksByConcept);

// 2. Rota para os detalhes: /books/:id
router.get('/books/:bookId', getBookDetails);

// ==========================================
// ✍️ ROTAS DE ESCRITA (POST)
// ==========================================

router.post('/progress', toggleChapterProgress);

export default router;