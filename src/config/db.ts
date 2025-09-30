import mongoose from "mongoose";
import {config} from "./config.ts";
export const connectDB = async () => {
  try {
    await mongoose.connect(config.dburl as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
export default mongoose;
