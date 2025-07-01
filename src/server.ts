import * as dotenv from "dotenv";
import * as http from "http"

dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
  response.end("Servidor OK");
});

server.listen(PORT, () => {
  console.log(`Servidor iniciado na Porta ${PORT}`);
});

