import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';

const app = express();


dotenv.config();

connectDB();

app.use(express.json());

app.use('/api/v1/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("<h1>Hello from Ecommerce</h1>");
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});