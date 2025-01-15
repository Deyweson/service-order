import { ApiError } from "./api-errors";

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
}