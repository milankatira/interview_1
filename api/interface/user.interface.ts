import { Schema } from "mongoose";

export interface Iuser {
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  _id: Schema.Types.ObjectId;
}
