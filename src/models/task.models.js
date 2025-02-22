import pool from '../config/db.js';

export const getAllTasks = async () => {
  try {
    const [tasks] = await pool.query('SELECT * FROM tasks WHERE deleted_at = 0');
    console.log(tasks)
    return tasks;
  } catch (error) {
    throw new Error('Error fetching tasks');
  }
};

export const getTaskById = async (id) => {
  try {
    const [task] = await pool.query('SELECT * FROM tasks WHERE id = ? AND deleted_at = 0', [id]);
    
    return task[0] || null;
  } catch (error) {
    throw new Error('Error fetching task');
  }
};

export const createTask = async (title, description) => {
  try {
    const [result] = await pool.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
    return result.insertId;
  } catch (error) {
    throw new Error('Error creating task');
  }
};

export const updateTask = async (id, status) => {
  try {
    await pool.query('UPDATE tasks SET status = ? WHERE id = ?', [status, id]);
  } catch (error) {
    throw new Error('Error updating task');
  }
};

export const deleteTask = async (id) => {
  try {
    await pool.query('UPDATE tasks SET deleted_at = NOW() WHERE id = ?', [id]);
  } catch (error) {
    throw new Error('Error deleting task');
  }
};
