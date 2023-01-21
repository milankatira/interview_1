import { Iuser } from "../../interface/user.interface";
import { errorHandler } from "../../utils/errorHandler";
import userModel from "./user.model";

export const addUser = async (payload: Iuser) => {
  try {
    return await userModel.create(payload);
  } catch (error) {
    errorHandler(error);
  }
};
