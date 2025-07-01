import {IncomingMessage, ServerResponse} from 'node:http'
import {servicesListEpisodes} from '../services/list-episodes-services'
import { servicesFilterEpisodes } from '../services/filter-episodes-services';
import statuscode from 'http-status-codes'
import { ContentType } from '../utils/content-type';

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
  const content = await servicesListEpisodes(); // <- aqui!
  response.writeHead(statuscode.OK, { "Content-Type": ContentType.JSON });
  response.end(JSON.stringify(content));
}

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
  const content = await servicesFilterEpisodes(request.url); // <- aqui!
  response.writeHead(statuscode.OK, { "Content-Type": ContentType.JSON });
  response.end(JSON.stringify(content));
}