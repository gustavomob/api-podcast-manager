import { IncomingMessage } from "node:http"
import { repositoryPodcast } from "../repositories/podcast-repository"

export const servicesFilterEpisodes = async (podcastName: string | undefined)=>{
   const queryString = podcastName?.split("?p=")[1] || ""
  const data = await repositoryPodcast(queryString)
  return data
}