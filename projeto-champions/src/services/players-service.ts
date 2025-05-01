import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistic-model";
import * as playerRepo from "../repositories/player-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";

export const getPlayerData = async () => {

    let data = await playerRepo.findAllPlayers();
    let response = null;
    if(data){
        response = await ok(data);
    }else {
        response = await noContent();
    }
         

    return response;
}

export const getPlayerDataById = async (id:number) => {

    let data = await playerRepo.findPlayerById(id);
    let response = null;
    if(data){
        response = await ok(data);
    }else {
        response = await noContent();
    }
         

    return response;
}

export const createPlayer = async (player:PlayerModel) => {

    if(Object.keys(player).length !== 0 ){
        await playerRepo.insertPlayer(player);
        return await created();
    }else {
        return await badRequest();
    }
         
}

export const deletePlayerService = async (id:number) => {

    let response = null;
    let ret = await playerRepo.deletePlayerById(id);
    if(ret){
        response = await ok({message: "deleted"});
    }else {
        response = await badRequest();
    }
         
    return response;
}

export const updatePlayer = async (id:number, statistics:StatisticsModel) => {

    const data = await playerRepo.findAndModifyPlayer(id,statistics);
    if(Object.keys(data).length === 0){
        return await badRequest();
    }
        return await ok(data);
         
}

