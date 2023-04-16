import connectDatabase from "@/lib/connectDatabase";
import { Choice } from "@/lib/model";

export default function handler(req, res) {
  try {
    connectDatabase();
    const { username, roomName, netValue, roundNumber } = req.body;
    const newChoice = new Choice({ username, roomName, netValue, roundNumber });
    newChoice.save();
    res.send("choice saved");
  } catch (error) {
    res.send(error.message);
  }
}
