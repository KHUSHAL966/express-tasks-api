import * as Task from '../models/task.models.js';

export const getAllTasks = async (req, res) => {

  try {
  const kp =  res.json(await Task.getAllTasks());
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.getTaskById(req.params.id);
    task ? res.json(task) : res.status(404).json({ message: 'Task not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const taskId = await Task.createTask(title, description);
    res.status(201).json({ id: taskId, title, description });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    await Task.updateTask(req.params.id, req.body.status);
    res.json({ message: 'Task updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.deleteTask(req.params.id);
    res.json({ message: 'Task soft deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
