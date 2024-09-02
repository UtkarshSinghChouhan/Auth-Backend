import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { AuthUtils } from '@src/utils/auth-utils';
import User from '@src/models/user-model';

// Register user
export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = AuthUtils.generateToken(user._id);

    // Set httpOnly cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Login user
export const login = async (req: Request, res: Response) => {

  const { email, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = AuthUtils.generateToken(user._id);

    // Set httpOnly cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.json({ message: 'User logged in successfully' });    
  } catch (error) {
    
    res.status(500).json({ message: error });
  }
};

// Logout user
export const logout = (req: Request, res: Response) => {
  try {
    res.clearCookie('jwt');
    res.sendStatus(200).json({ message: 'User logged out successfully' });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
