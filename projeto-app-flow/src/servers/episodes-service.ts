import { IncomingMessage } from "http";
import { repoPodcast } from "../repository/podcast-repository";



export const serviceListEpisodes = async ()=> {
    return await repoPodcast();
}

export const serviceFilterEpisodes = async (url:string | undefined) => {//podcastname:string) => {
    const podcastname = url?.split("?p=")[1] ?? "";
    const data = await repoPodcast(podcastname);

    return data;
    
}