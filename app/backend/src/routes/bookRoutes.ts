import { Router } from 'express';
import { getBooks } from '../controllers/BookController';
import { handleRobotAction } from '../controllers/RobotControllers';

const router = Router();

//rota p pegar os livros (GET)
router.get('/books', getBooks);

//rota pra falar c o robô (POST)
router.post('/robot', handleRobotAction);

export default router;