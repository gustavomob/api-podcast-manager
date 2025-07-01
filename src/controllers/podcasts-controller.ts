import {IncomingMessage, ServerResponse} from 'node:http'
import {data} from '../data/db'
import statuscode from 'http-status-codes'

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse)=>{
  response.writeHead(statuscode.OK, {"Content-type":"application/json"})  
  response.end(JSON.stringify(data))
}