import { FilterPodcastModel } from "../models/filter-podcast-model"
import { podCastRepository } from "../repositories/podcast-repository"
import statuscode from 'http-status-codes'

export const servicesFilterEpisodes = async (
  podcastName: string | undefined): Promise<FilterPodcastModel>=>{

  let responseFormat: FilterPodcastModel = {
    statusCode: 0,
    body: []
  }

  const queryString = podcastName?.split("?p=")[1] || ""
  const data = await podCastRepository(queryString)

  responseFormat.statusCode = data.length !== 0 ? statuscode.OK 
  : statuscode.NO_CONTENT;
  responseFormat.body = data
  return responseFormat
}