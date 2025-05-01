import { Request, Response } from "express";
import * as ps from "../services/players-service";
import { StatisticsModel } from "../models/statistic-model";

export const getPlayer = async (req: Request, res:Response) => {

    const response = await ps.getPlayerData();

    res.status(response.statusCode).json(response.body);

};

export const getPlayerByID = async (req:Request, res:Response) => {
    const id = req.params.id;
    const response = await ps.getPlayerDataById(Number.parseInt(id));
    res.status(response.statusCode).json(response.body);
}

export const postPlayer = async (req:Request, res:Response) => {
    const body = req.body;
    const response = await ps.createPlayer(body);
    if(response){
        res.status(response.statusCode).json(response.body);
    }
}

export const deletePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const response = await ps.deletePlayerService(id);
    if(response){
        res.status(response.statusCode).json(response.body);
    }
}
export const updatePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const body:StatisticsModel = req.body;
    const response = await ps.updatePlayer(id,body);
}

