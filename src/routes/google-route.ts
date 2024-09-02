import passport from 'passport';
import express, { NextFunction } from 'express';
import { Request, Response } from 'express';

const router = express.Router();

// Set up the Google OAuth routes
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

// Protect a route that requires authentication
router.get(
  '/protected',
  (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/login');
    }
  },
  (req: Request, res: Response) => {
    res.send('Welcome to the protected route!');
  }
);
