import mongoose, { Document, Schema } from "mongoose";
export interface Message extends Document {
  content: string;
  createdAt: Date;
}
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  isVerify:boolean;
  verifyCodeExpiry: Date;
  isAcceptingMessage: boolean;
  messge: Message[];
}

const messageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const userSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is Required."],
    trim:true,
    unique:true
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique:true,
    match:[/.+\@.+\..+/,'Please use a valid email addres.']

  },
  password: {
    type: String,
    required:[true,"Password is required."]
  },
  verifyCode: {
    type: String,
    required:[true,"Verifycode expiry is required."]
  },
  isVerify:{
    type:Boolean,
    default:false
  },
  verifyCodeExpiry: {
    type: Date,
  },
  isAcceptingMessage: {
    type: Boolean,
    default:true
  },
  messge:[messageSchema]
});

const UserModel=(mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User",userSchema))
export default UserModel;