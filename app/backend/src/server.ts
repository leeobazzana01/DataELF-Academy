import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes'; // Importa o index.ts que acabamos de criar

// Carrega variáveis de ambiente
dotenv.config();

const app = express();

// Configurações
app.use(cors()); // Permite conexão com o Frontend
app.use(express.json()); // Permite leitura de JSON

// Rota de Health Check (para ver se está vivo)
app.get('/', (req, res) => {
  res.json({ status: 'DataElf Backend Online 🤖' });
});

// Conecta o Hub de Rotas na URL /api
// Ex: /api/books, /api/auth/login
app.use('/api', routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`\n Servidor rodando em: http://localhost:${PORT}`);
  console.log(`Autenticação ativa.`);
});