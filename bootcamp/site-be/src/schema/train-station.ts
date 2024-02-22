import { Schema } from "mongoose";

export const StationSchema = new Schema({
    id: Number,
    station_name: String,
})