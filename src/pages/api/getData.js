import connectDatabase from "@/lib/connectDatabase";
import { Choice } from "@/lib/model";

export default async function handler(req, res) {
    // this will take the round number and fetch and return the data
  try {
    connectDatabase();
    const choices = await Choice.find();
    res.send(choices);
  } catch (error) {
    res.send(error.message);
  }
}
