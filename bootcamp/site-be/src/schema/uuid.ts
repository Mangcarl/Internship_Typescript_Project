import { Schema } from "mongoose";
import { UUID } from "../db";
const logEntrySchema = new Schema({
  Origin: String,
  Destination: String,
  Distance: String,
  Charge: Number
});
export const UUIDSchema = new Schema({
  uuid: Number,
  balance: Number,
  inStation: String,
  logs: [logEntrySchema]
})

export const getUUIDs = () => UUID.find();
export const createBeepUUID = (values: Record<string, any>) => new UUID(values).save().then((beep) => beep.toObject());

