import { ApiError } from "./api-errors";

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}