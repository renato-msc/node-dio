import * as http from "http";
import {getListEpisodes,getEpisodesByName} from "./controllers/controller";
import { Routes } from "./routes/routes";

export const app  = async (req: http.IncomingMessage, resp: http.ServerResponse) => {
    const [baseUrl, queryString] = req.url?.split("?") ?? ["",""];

   //console.log(baseUrl);
   if(req.method === "GET" && baseUrl === Routes.LIST){
       await getListEpisodes(req,resp);
   }else if (req.method === "GET" && baseUrl === Routes.EPISODE){
       await getEpisodesByName(req,resp);
   }
}
