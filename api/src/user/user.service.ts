import { Iuser } from "../../interface/user.interface";
import { addUser } from "./user.helper";

export const adduserService = async (payload: Iuser) => {
  return await addUser(payload);
};
