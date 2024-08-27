import jwt from 'jsonwebtoken';

export const AuthUtils = {
  generateToken: (id: string) => {
    
     // If all the credentials are valid - Create a jwt token
     const millisecondsInADay = 24 * 60 * 60 * 1000;
     const exp = Date.now() + (30 * millisecondsInADay);     //30 days expiration

    const token = jwt.sign({ id, exp }, process.env.JWT_SECRET as string);
    return token;
  },
};
