import { repositoryPodcast } from "../repositories/podcast-repository"

export const servicesListEpisodes = async () =>{
  const data = await repositoryPodcast()
  return data
}
  
