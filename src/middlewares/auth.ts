import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "../env";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const auth = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, env.JWT_SECRET);
    (req as CustomRequest).token = decoded
    next()
  } catch (er) {
    res.status(401).json({ message: "Invalid token" });
  }
}