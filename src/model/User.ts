import mongoose,{Date, Document} from "mongoose";
export interface Message extends Document{
    content:string,
    createdAt:Date
}
export interface User extends Document{
    
}


















