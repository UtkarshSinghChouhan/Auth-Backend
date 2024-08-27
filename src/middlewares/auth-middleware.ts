import User from '@src/models/user-model';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';



export const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token

  if (req.cookies.jwt) {
    try {
      // Read the token off the cookie
      token = req.cookies.jwt;

      // Decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as DecodedToken;

      const user = await User.findById(decoded.id)
      if(!user) return res.sendStatus(401)  // 401 => unauthorized

      // attach user to the request
      req.user = user

      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};
