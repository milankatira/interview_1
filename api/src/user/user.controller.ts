import { Request, Response } from "express";
import { response } from '../../constant/response.constant';
import { adduserService } from "./user.service";

export const addUserController = async (req: Request, res: Response) => {
  try {
    const result = await adduserService(req.body);
    return res.status(201).json({
      status: true,
      message: response.signup,
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error,
    });
  }
};
