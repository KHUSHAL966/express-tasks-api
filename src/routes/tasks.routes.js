import express from 'express';
import * as TaskController from '../controllers/tasks.controller.js';
import authMiddleware from '../middleware/auth.middlewaare.js';

const router = express.Router();
router.get('/', authMiddleware, TaskController.getAllTasks);
router.get('/:id', authMiddleware, TaskController.getTaskById);
router.post('/', authMiddleware, TaskController.createTask);
router.patch('/:id', authMiddleware, TaskController.updateTask);
router.delete('/:id', authMiddleware, TaskController.deleteTask);

export default router;
