import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("DB Connected")
    } catch (error) {
        console.log(` Mongoose connection error :  ${error}`);
    }

}

export default connectDB;