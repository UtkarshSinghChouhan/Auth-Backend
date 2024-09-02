import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './config/database';
import authRoutes from './routes/auth-route';
import protectedRoutes from './routes/protected-route';

//=======================  Load environment variables from .env file ======================= 
dotenv.config();

//======================= Create an express app =======================
const app = express()

//======================= Configure express app =======================
app.use(express.json());
app.use(cors({
    origin: true,
    credentials : true
}))
app.use(cookieParser())

//======================= Connect to Database =======================
connectDB();


// Use auth routes
app.use('/api/auth', authRoutes);

// Use protected routes
app.use('/api', protectedRoutes);

app.get('/', (req, res) => {
  res.send(`<a href="/auth/google"> Authentication with google </a>`)
})





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
