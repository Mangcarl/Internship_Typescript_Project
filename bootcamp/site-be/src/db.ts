import mongoose from "mongoose";
import { StationSchema } from "./schema/train-station";
import * as dotenv from 'dotenv';
import { UUIDSchema } from "./schema/uuid";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";
let connection: typeof mongoose | null = null;
export const establishConnection = async () => {
  /**
   * create a .env file
   * add a MONGO_URI={connection string} env inside
   */
  mongoose.Promise = Promise
  connection = await mongoose.connect(MONGO_URI);
  mongoose.connection.on('error', (error: Error) => console.log(error))
  return connection;
}

export const Station = mongoose.model('Station', StationSchema, 'stations');
export const UUID = mongoose.model('UUIDs', UUIDSchema, 'UUID');
