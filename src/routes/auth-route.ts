import { login, logout, signup } from '@src/controllers/auth-controller';
import express from 'express';

const router = express.Router();

// Route for user signup
router.post('/signup', signup);

// Route for user login
router.post('/login', login);

// Route for user logout
router.get('/logout', logout);

export default router;