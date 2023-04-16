import mongoose from "mongoose";

const connectDatabase = async () => {
    await mongoose.connect("mongodb://localhost/operation");
    console.log("database connected");
};

export default connectDatabase;
