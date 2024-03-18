import express, { Request, Response } from 'express';
import { UUID, Station } from '../db';
import * as dotenv from 'dotenv';
import { createBeepUUID, getUUIDs } from '../schema/uuid';
// import { haversineDistance, listStations } from './station';
// import { getStations } from '../schema/train-station';

dotenv.config();

export const onlyNumbersRegex = /^[0-9]+$/

export const listUUIDs = async (req: Request, res: Response) => {
    try {
        const UUIDs = await getUUIDs();
        console.log("Sending UUIDList to FE");
        res.status(200).send(UUIDs);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};