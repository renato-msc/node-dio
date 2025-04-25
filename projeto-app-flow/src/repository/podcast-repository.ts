import fs from "fs";
import path from "path";

interface Podcast{
    podcastname: string;
    episode: string;
    videoId: string;
    categories: string[];
} 


const pathData = path.join(__dirname,"./podcasts.json");

export const repoPodcast = async (
    podcastname?:string  //? faz com que o parametro seja opcional
): Promise<Podcast[]> => {
    const data = fs.readFileSync(pathData, "utf-8");

    let jsonFile = JSON.parse(data);

    if(podcastname){
        jsonFile = jsonFile.filter((podcast: Podcast)=> podcast.podcastname === podcastname);
    }

    return jsonFile;
}
