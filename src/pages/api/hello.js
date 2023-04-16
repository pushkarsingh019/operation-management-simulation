import connectDatabase from "@/lib/connectDatabase"
import { Choice } from "@/lib/model";

export default function handler(req, res) {
  connectDatabase();
  res.status(200).json({ message : "this is working" })
}
