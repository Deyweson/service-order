import { Request, Response } from "express";
import { db } from "../../database/db";
import { IUser } from "../../models/user";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import { env } from "../../env";
import { BadRequestError } from "../../errors/bad-request";

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await db<IUser>('users').where({ username }).first();
  if (!user) {
    throw new BadRequestError("Invalid Credentials");
  }

  const passwordValidate = bcrypt.compare(password, user.password);
  if (!passwordValidate) {
    throw new BadRequestError("Invalid Credentials");
  }

  const token = jwt.sign({ id: user.id }, env.JWT_SECRET, { expiresIn: '2 days' })

  res.status(200).json({ user, token });
  return

}