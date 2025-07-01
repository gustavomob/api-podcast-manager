import * as dotenv from "dotenv";
import * as http from "node:http"
import { app } from "./app";

dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor iniciado na Porta ${PORT}`);
});

