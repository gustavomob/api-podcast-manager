import { repositoryPodcast } from "../repositories/podcast-repository"

export const servicesFilterEpisodes = async (podcastName: string)=>{
  const data = await repositoryPodcast(podcastName)
  return data
}