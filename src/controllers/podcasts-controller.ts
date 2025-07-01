import { IncomingMessage, ServerResponse } from 'node:http';
import { servicesListEpisodes } from '../services/list-episodes-services';
import { servicesFilterEpisodes } from '../services/filter-episodes-services';
import { ContentType } from '../utils/content-type';
import { FilterPodcastModel } from '../models/filter-podcast-model';
import statuscode from 'http-status-codes';

const DEFAULT_CONTENT = {"Content-Type": ContentType.JSON}

export const getListEpisodes = async (
  _request: IncomingMessage,
  response: ServerResponse
) => {
  try {
    const content: FilterPodcastModel = await servicesListEpisodes();
    response.writeHead(content.statusCode, DEFAULT_CONTENT);
    response.write(JSON.stringify(content.body));
    response.end();
  } catch (error) {
    response.writeHead(statuscode.INTERNAL_SERVER_ERROR, DEFAULT_CONTENT);
    response.write(JSON.stringify({ error: "Erro ao listar episódios" }));
    response.end();
  }
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  try {
    const content: FilterPodcastModel = await servicesFilterEpisodes(request.url ?? '/');
    response.writeHead(content.statusCode, DEFAULT_CONTENT);
    response.write(JSON.stringify(content.body));
    response.end();
  } catch (error) {
    response.writeHead(statuscode.INTERNAL_SERVER_ERROR, DEFAULT_CONTENT);
    response.write(JSON.stringify({ error: "Erro ao filtrar episódios" }));
    response.end();
  }
};
