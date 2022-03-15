import mongoose, { Schema, Document } from "mongoose";

type User = {
  name: string;
  username: string;
  createdAt: Date;
};

const UserSchema = new Schema({
  name: String,
  username: String,
  createdAt: {
    type: "Date",
    default: Date.now,
  },
});

const User = mongoose.model<User>("User", UserSchema);

export { User };
