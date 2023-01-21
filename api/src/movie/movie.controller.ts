import { Request, Response } from "express";
import data from "./movies.json";
import { response } from "../../constant/response.constant";

export const getAllMoview = async (req: Request, res: Response) => {
  try {
    return res.status(201).json({
      status: true,
      message: response.getmoviewList,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error,
    });
  }
};
