import { Request, Response } from "express";
import { db } from "../../database/db";
import { IUser } from "../../models/user";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import { env } from "../../env";

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await db<IUser>('users').where({ username }).first();
  if (!user) {
    res.status(404).json({ message: "Invalid Credentials" });
    return
  }

  const passwordValidate = bcrypt.compare(password, user.password);
  if (!passwordValidate) {
    res.status(401).json({ message: "Invalid Credentials" });
    return
  }

  const token = jwt.sign({ id: user.id }, env.JWT_SECRET, { expiresIn: '2 days' })

  res.status(200).json({ user, token });
  return

}