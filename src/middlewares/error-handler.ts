import { NextFunction, Request, Response } from "express"
import { ApiError } from "../errors/api-errors"

export const errorHandler = (
  err: Error & Partial<ApiError>,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal server error'
  res.status(statusCode).json({ message })
  return
}