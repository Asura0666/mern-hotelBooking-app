import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";
import { UserType } from "../shared/types";

export interface UserDocument extends Document, UserType {
  _id?: string;
}
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

userSchema.pre<UserDocument>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
