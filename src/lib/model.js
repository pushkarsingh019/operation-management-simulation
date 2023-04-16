import mongoose from "mongoose";

const choiceSchema = new mongoose.Schema({
  username: { type: String, required: true },
  netValue: { type: Number, required: true },
  roundNumber: { type: Number, required: true },
  roomName: { type: String, required: true },
});

export const Choice = mongoose.models.Choice || mongoose.model("Choice", choiceSchema);
