import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes'; //importa o index.ts
import http from 'http';
import { Server } from 'socket.io';

//carrega variaveis de ambiente
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'DataElf Backend Online' });
});

app.use('/api', routes);

//configura socket io
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

//variavel q controla o tempo entre convites feito ao usuário
let lastInviteTime = 0;
const INVITE_COOLDOWN = 30000; //30 segundos 

io.on("connection", (socket) => {
  console.log(`🔌 Conectado: ${socket.id}`);

  socket.on("identify", (type) => {
    if (type === "ROBOT") {
      socket.join("robot_room");
      console.log("ROBÔ SANBOT ONLINE");
    } else {
      console.log("Frontend conectado");
    }
  });

  //se comunica com o sensor do robô
  socket.on("sensor_activity", (data) => {
    if (data === "PERSON_DETECTED") {
      const now = Date.now();

      //se passou tempo suficiente desde o ultimo convite
      if (now - lastInviteTime > INVITE_COOLDOWN) {
        console.log("Pessoa detectada. Enviando convite...");
        
        //autaliza o tempo do ultimo convite
        lastInviteTime = now;

        //pede ao robo para falar
        io.to("robot_room").emit("command", {
          action: "INVITE_USER",
          text: "Ola tudo bem? Eu sou o Robô Sanbot Elf. Que tal aprender um pouco sobre Data Science e Inteligência Artificial hoje? Faça o login para começarmos."
        });
      } else {
        //ignora silenciosamente
        console.log("Movimento detectado, mas aguardando cooldown.");
      }
    }
  });

  socket.on("disconnect", () => {
    console.log("Desconectado");
  });
});

//injeta o IO no app p ser usado nos Controllers (login, etc)
app.set('io', io);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`\nBackend rodando em: http://localhost:${PORT}`);
});