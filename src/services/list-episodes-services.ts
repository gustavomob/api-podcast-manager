import { FilterPodcastModel } from "../models/filter-podcast-model"
import { podCastRepository } from "../repositories/podcast-repository"
import statuscode from 'http-status-codes'

export const servicesListEpisodes = async (): Promise<FilterPodcastModel> =>{

  let responseFormat: FilterPodcastModel = {
      statusCode: 0,
      body: []
    }

  const data = await podCastRepository()
  responseFormat.statusCode = data.length !== 0 ? statuscode.OK 
  : statuscode.NO_CONTENT;

  responseFormat.body = data
  return responseFormat
}
  
