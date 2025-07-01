import {IncomingMessage, ServerResponse} from 'node:http'
import {servicesListEpisodes} from '../services/list-episodes-services'
import statuscode from 'http-status-codes'

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
  const content = await servicesListEpisodes(); // <- aqui!
  response.writeHead(statuscode.OK, { "Content-Type": "application/json" });
  response.end(JSON.stringify(content));
}