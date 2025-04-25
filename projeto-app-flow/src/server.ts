import * as http from "http";
import { app } from "./app";
//import {getListEpisodes,getEpisodesByName} from "./controllers/controller";
//import { Routes } from "./routes/routes";

/* const server = http.createServer( async (req: http.IncomingMessage, resp: http.ServerResponse) => {
     const [baseUrl, queryString] = req.url?.split("?") ?? ["",""];

    //console.log(baseUrl);
    if(req.method === "GET" && baseUrl === Routes.LIST){
        await getListEpisodes(req,resp);
    }else if (req.method === "GET" && baseUrl === Routes.EPISODE){
        await getEpisodesByName(req,resp);
    }


}); */

const server = http.createServer(app);

const port = process.env.PORT;
server.listen(port, ()=> { console.log(`servidor iniciado na porta ${port}`)});