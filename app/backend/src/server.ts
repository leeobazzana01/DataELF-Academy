import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//variaveis de ambiente
dotenv.config();

const app = express();

//configs basicas
app.use(cors()); //liberando acesso externo
app.use(express.json()); //permite receber json no corpo da req

//rota de teste
app.get('/', (req, res) => {
  res.json({ 
    status: 'Running', 
    message: 'Backend DataElf operando! O Robô está pronto.',
    timestamp: new Date()
  });
});

//porta
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`
  Servidor Iniciado!
  URL: http://localhost:${PORT}
  Modo: Desenvolvimento
  `);
});