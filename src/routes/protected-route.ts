// src/routes/protected-routes.ts
import { protect } from '@src/middlewares/auth-middleware';
import express from 'express';

const router = express.Router();

// A route that requires authentication
router.get('/protected', protect, (req, res) => {
  // This route is protected by the `protect` middleware
  res.json({ message: 'This is a protected route', user: req.user });
});

export default router;