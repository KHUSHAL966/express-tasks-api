# Task Management API

A simple Task Management API built using **Node.js, Express, and MySQL** with user authentication, CRUD operations, and Swagger documentation.

## Features

- User authentication (Signup & Login)
- Task management (Create, Read, Update, Soft Delete)
- MySQL database integration
- API documentation with Swagger
- Error handling with try-catch

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-repo/task-management-api.git
cd task-management-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a **.env** file in the root directory and add:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=task_management
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the server

```bash
npm run dev  # Start with Nodemon
type node server.js # Start normally
```

### 5️⃣ Open Swagger API Docs

Go to: **[http://localhost:5000/api-docs](http://localhost:5000/api-docs)**

---

## 📌 API Endpoints

### **🔹 Auth Routes**

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| POST   | `/api/auth/signup` | Register a new user       |
| POST   | `/api/auth/login`  | Login and get a JWT token |

### **🔹 Task Routes (Protected)**

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| GET    | `/api/tasks`     | Get all tasks (with pagination) |
| GET    | `/api/tasks/:id` | Get task by ID                  |
| POST   | `/api/tasks`     | Create a new task               |
| PATCH  | `/api/tasks/:id` | Update task details             |
| DELETE | `/api/tasks/:id` | Soft delete a task              |

🔒 **Note:** Add `Authorization: Bearer <JWT_TOKEN>` in the headers for protected routes.

---

## 📂 Project Structure

```
📦 task-management-api
├── 📂 config
│   ├── db.js           # MySQL database connection
├── 📂 controllers
│   ├── authController.js  # Handles user authentication
│   ├── taskController.js  # Handles CRUD operations for tasks
├── 📂 middleware
│   ├── authMiddleware.js  # Middleware for token authentication
├── 📂 routes
│   ├── authRoutes.js  # Routes for authentication
│   ├── taskRoutes.js  # Routes for tasks
├── 📂 models
│   ├── taskModel.js   # Task model for database interactions
│   ├── userModel.js   # User model for database interactions
├── swagger.js         # Swagger API documentation setup
├── server.js          # Main Express server file
├── package.json       # Dependencies and scripts
├── .env               # Environment variables
└── README.md          # Project documentation
```

---

## 🛠 Technologies Used

- **Node.js & Express.js** - Backend framework
- **MySQL** - Relational database
- **JWT** - Authentication
- **bcrypt & md5** - Password hashing
- **Swagger** - API documentation

---

## 🛡️ Error Handling

All routes include **try-catch** blocks to handle errors gracefully. Example:

```javascript
try {
  const tasks = await pool.query('SELECT * FROM tasks');
  res.status(200).json(tasks);
} catch (error) {
  res.status(500).json({ message: 'Database error' });
}
```

---

## 📌 Future Improvements

✅ Unit testing with Jest\
✅ Role-based access control\
✅ Docker support

---

## 📞 Support

For any issues, feel free to raise an issue on **GitHub** or contact me at khu 

llasod\@gmail
