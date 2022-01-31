import { Request, Response, NextFunction } from 'express';
import AuthService from '@src/services/auth';

export function authMiddleware(
  req: Partial<Request>,
  res: Partial<Response>,
  next: NextFunction
): void {
  const token = req.headers?.['x-access-token'];
  try {
    const claims = AuthService.decodeToken(token as string);
    req.context = { userId: claims.sub };
    next();
  } catch (err) {
    if (err instanceof Error) {
      res.status?.(401).send({ code: 401, error: err.message });
    } else {
      res.status?.(401).send({ code: 401, error: 'Unknown auth error' });
    }
  }
}
