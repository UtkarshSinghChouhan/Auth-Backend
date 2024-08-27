import mongoose, { Schema, model } from 'mongoose';

// Define schema
const userSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // googleId: {
  //   type: String,
  //   unique: true,
  //   sparse: true,
  // },
});

// Create model
const User = model<IUser>('User', userSchema);

export default User;
