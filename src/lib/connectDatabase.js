import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose.connect("mongodb://localhost/operation").then(() => console.log("database connected"))
};

export default connectDatabase;