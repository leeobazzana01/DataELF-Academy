import { Router } from 'express';
import { handleRobotAction } from '../controllers/RobotControllers'; // Verifique se seu arquivo chama RobotController ou RobotControllers

const router = Router();

router.post('/action', handleRobotAction);

export default router;