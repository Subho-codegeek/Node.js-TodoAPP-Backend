import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Node_API"
    }).then(() => console.log("databse connected")).catch((e) => console.log(e));
}

export default connectDB;