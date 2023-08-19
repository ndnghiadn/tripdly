import mongoose from "mongoose";

let isConnected = false; // variable to check if mongoose is connected

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.error("MONGOURL NOT FOUND!!!");
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
  } catch (error) {
    console.error("Failed to connect to DB");
  }
};
