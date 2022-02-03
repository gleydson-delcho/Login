import { Request, Response, NextFunction } from "express";
import { decode, verify } from "jsonwebtoken";

export const ensureAuth = () => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const authHeaders = request.headers.authorization;

    if(!authHeaders) {
      return response.status(401).json({error: "Token expired or missing"})
    }
    const [, token] = authHeaders.split(" ");

    try {
      verify(token, process.env.SECRET_JWT);
      const { sub } = decode(token);
      request.body = sub.toString();
      return next();
    } catch (error) {
      return response.status(401).end();      
    }
  }
}