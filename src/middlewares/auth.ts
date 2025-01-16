import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "../env";
import { CustomRequest } from "../@types/custom-request";
import { decode } from "punycode";

export const auth = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, env.JWT_SECRET);
    const { id } = decoded as JwtPayload;
    req.token = id

    next()
  } catch (er) {
    res.status(401).json({ message: "Invalid token" });
  }
}