import { Document } from 'mongoose';

declare global {

  // User type definition
  interface IUser extends Document {
    _id: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
    
  // Extended Request type for adding user information after authentication
  interface AuthenticatedRequest extends Request {
    user?: IUser;
  }

  interface DecodedToken {
    id: string;
  }

  namespace Express {
    interface Request {
      user?: User; // Extend the Request interface to include the `user` property
    }
  }
}