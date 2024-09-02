import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '@src/models/user-model';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: `${process.env.APPURL}/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists in our db
        let existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          // already have this user
          return done(null, existingUser);
        }

        // if not, create a new user in our db
        const newUser = new User({
          googleId: profile.id,
          email: profile.emails ? profile.emails[0].value : '',
        });

        const savedUser = await newUser.save();
        done(null, savedUser);
      } catch (err) {
        done(err, undefined);
      }
    }
  )
);

// Serialize user instance to the session
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

// Deserialize user instance from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
