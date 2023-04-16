import mongoose from "mongoose";

const connectDatabase = async () => {
    await mongoose.connect("mongodb+srv://pushkarsingh019:Mf0tOLDoDLORWVk5@cluster0.sd4ew.mongodb.net/operation");
    console.log("database connected");
};

export default connectDatabase;
