import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { db } from "../../database/db";
import { IUser } from "../../models/user";
import { BadRequestError } from "../../errors/bad-request";



export const registerController = async (req: Request, res: Response) => {

  const { username, password } = req.body;

  const validateUsername = await db<IUser>('users').where({ username }).first();
  if (validateUsername) {
    throw new BadRequestError("Username already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await db<IUser>('users').insert({ password: hashedPassword, username }).returning('*')

  res.status(201).json(newUser);
  return

}