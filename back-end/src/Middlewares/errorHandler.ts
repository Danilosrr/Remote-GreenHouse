import { NextFunction, Request, Response } from "express";

export class CustomError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export const Errors = {
  badRequestError(text?: string) {
    throw new CustomError(400, text);
  },
  unauthorizedError(text?: string) {
    throw new CustomError(401, text);
  },
  forbiddenError(text?: string) {
    throw new CustomError(403, text);
  },
  notFoundError(text?: string) {
    throw new CustomError(404, text);
  },
  conflictError(text?: string) {
    throw new CustomError(409, text);
  },
  unprocessableEntityError(text?: string) {
    throw new CustomError(422, text);
  },
  failedDependencyError(text?: string) {
    throw new CustomError(424, text);
  },
  invalidTokenError(text?: string) {
    throw new CustomError(498, text);
  },
};

const handleErrors = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error) {
    console.log(error);
    return res.status(error.status).send(error.message);
  }
  console.log(error);
  return res.sendStatus(500);
};

export default handleErrors;
