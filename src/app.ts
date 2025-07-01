 import * as http from "node:http"
 import {getListEpisodes, getFilterEpisodes} from './controllers/podcasts-controller'
  import { Routes } from "./routes";
  import { HttpMethod } from "./utils/http-method";  

  export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
  const [baseUrl, _queryString] = request.url?.split("?") ?? ["",""]

  if(request.method === HttpMethod.GET && baseUrl=== Routes.PODCASTS){
    await getListEpisodes(request, response)
  } 

  if(request.method === HttpMethod.GET && baseUrl===Routes.EPISODES){
    await getFilterEpisodes(request, response)  
  }
}

  