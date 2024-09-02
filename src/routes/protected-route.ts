// src/routes/protected-routes.ts
import { protect } from '@src/middlewares/auth-middleware';
import express from 'express';

const router = express.Router();

// A route that requires authentication
router.get('/protected', protect, (req, res) => {
  // This route is protected by the `protect` middleware

  try {
    console.log('req.user===========', req.user);
    // res.json({ message: 'This is a protected route', user: req.user });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

export default router;