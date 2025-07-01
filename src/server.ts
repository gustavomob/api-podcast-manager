import * as dotenv from "dotenv";
import * as http from "node:http"
import {getListEpisodes} from './controllers/podcasts-controller'

dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
  if(request.method === 'GET'){
    await getListEpisodes(request, response)
  } 
});

server.listen(PORT, () => {
  console.log(`Servidor iniciado na Porta ${PORT}`);
});

