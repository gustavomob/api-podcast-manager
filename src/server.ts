import * as dotenv from "dotenv";
import * as http from "node:http"
import {getListEpisodes, getFilterEpisodes} from './controllers/podcasts-controller'

dotenv.config();

const PORT = process.env.PORT;


const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
  const [baseUrl, queryString] = request.url?.split("?") ?? ["",""]
  
  if(request.method === 'GET' && baseUrl==="/api/list"){
    await getListEpisodes(request, response)
  } 
  if(request.method === 'GET' && baseUrl==="/api/episodes"){
    await getFilterEpisodes(request, response)
  } 
});

server.listen(PORT, () => {
  console.log(`Servidor iniciado na Porta ${PORT}`);
});

