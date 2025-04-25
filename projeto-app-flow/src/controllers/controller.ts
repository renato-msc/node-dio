import {IncomingMessage, request, ServerResponse} from 'http';
import {serviceListEpisodes,serviceFilterEpisodes} from "../servers/episodes-service";





export const getListEpisodes = async (request: IncomingMessage, resp: ServerResponse) =>{
    const content = await serviceListEpisodes();

    resp.writeHead(200, {'content-type': "application/json"});
    resp.end(JSON.stringify(content));
}

export const getEpisodesByName = async (request:IncomingMessage, resp: ServerResponse) => {
    
    const content = await serviceFilterEpisodes(request.url);
    resp.writeHead(200, {'content-type': "application/json"});
    resp.end(JSON.stringify(content));
}
