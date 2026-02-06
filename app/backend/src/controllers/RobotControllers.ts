import { Request, Response } from 'express';

export const handleRobotAction = async (req: Request, res: Response) => {
  try {
    const { action, userId } = req.body;
    let robotResponse = {};

    switch (action) {
      case 'user_login':
        robotResponse = {
          emotion: 'happy',
          animation: 'wave_hello',
          speech: `Bem-vindo de volta, ${userId || 'usuário'}!`,
          ledColor: '#00FF00'
        };
        break;
      
      case 'start_quiz':
        robotResponse = {
          emotion: 'focused',
          animation: 'idle_focus',
          speech: 'Iniciando módulo de testes.',
          ledColor: '#0000FF'
        };
        break;

      default:
        robotResponse = {
          emotion: 'neutral',
          animation: 'idle',
          speech: 'Aguardando comandos...',
          ledColor: '#FFFFFF'
        };
    }

    res.status(200).json(robotResponse);

  } catch (error) {
    console.error("Erro no robô:", error);
    res.status(500).json({ error: "Erro ao processar comando" });
  }
};