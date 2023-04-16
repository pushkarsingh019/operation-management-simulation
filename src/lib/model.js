import mongoose from "mongoose";

const choiceSchema = new mongoose.Schema({
    username : {type : String, required : true},
    netValue : {type : Number, required : true}
});

const roundSchema = new mongoose.Schema({
    roundName : String,
    roundData : [{username : String, netValue : Number}]
});

// models
export const Choice = mongoose.model("Choice", choiceSchema);
export const Round = mongoose.model("Round", roundSchema);
