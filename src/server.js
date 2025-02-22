import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
