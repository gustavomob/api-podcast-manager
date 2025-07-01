import fs from 'node:fs'
import path from 'node:path'
import { PodcastModel } from '../models/podcast-model'

const pathData = path.join(__dirname, "../repositories/db.json")

export const podCastRepository = async (podcastName?:string): Promise<PodcastModel[]>=>{
  const LANGUAGE="utf-8"
  const data = fs.readFileSync(pathData, LANGUAGE)
  let jsonFile = JSON.parse(data)

  if(podcastName){
    jsonFile = jsonFile.filter((podcast: { podcastName: string }) => podcast.podcastName === podcastName)
  }
  return jsonFile
}