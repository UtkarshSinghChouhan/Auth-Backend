import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log("connected to db");
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
  }
};

export default connectDB;
