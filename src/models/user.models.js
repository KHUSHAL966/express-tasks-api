import pool from '../config/db.js';

export const findByUsername = async (username) => {
  try {
    const [users] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    return users.length > 0 ? users[0] : null;
  } catch (error) {
    throw new Error('Database error');
  }
};

export const createUser = async (username, hashedPassword) => {
  try {
    const [result] = await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    return result.insertId;
  } catch (error) {
    throw new Error('Error creating user');
  }
};
