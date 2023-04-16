import connectDatabase from "@/lib/connectDatabase";
import { Choice } from "@/lib/model";

export default async function handler(req, res) {
    try {
      connectDatabase();
      const { roundNumber } = req.body;
      console.log(roundNumber);
      const choices = await Choice.find({ roundNumber: roundNumber });
      let data = choices.map(choice => ({username : choice.username, netValue : choice.netValue}));
      res.send(data)
    } catch (error) {
      res.send(error.message);
    }
  }
  
