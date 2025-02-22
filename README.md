# Express Tasks API

## 🚀 Overview
Welcome to the **Express Tasks API**, a powerful and scalable task management system built with **Node.js (Express.js)** and **MySQL**. This API provides robust authentication, CRUD operations for task management, soft delete functionality, and detailed API documentation using Swagger.

## 🛠 Features
- **User Authentication:** Secure login and signup system using JWT authentication.
- **Task Management:** Create, Read, Update, and Delete tasks seamlessly.
- **Soft Delete:** Keeps deleted tasks in the database with a `deleted_at` flag.
- **MySQL Database Integration:** Persistent data storage with structured querying.
- **Swagger API Documentation:** Well-documented endpoints for easy testing and integration.
- **Modular Code Structure:** Clean and maintainable architecture.

## 📌 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Token)
- **Documentation:** Swagger (swagger-jsdoc, swagger-ui-express)

## 📦 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/express-tasks-api.git
cd express-tasks-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=tasks_db
JWT_SECRET=supersecretkey
```

### 4️⃣ Run the Server
```sh
nodemon server.js
```

## 📌 API Endpoints

### 🔑 Authentication Endpoints
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| `POST` | `/auth/signup` | User registration |
| `POST` | `/auth/login`  | User login and JWT token generation |

### 📋 Task Management Endpoints (Protected)
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| `GET`  | `/tasks`       | Retrieve all tasks |
| `GET`  | `/tasks/:id`   | Retrieve a specific task by ID |
| `POST` | `/tasks`       | Create a new task |
| `PATCH`| `/tasks/:id`   | Update task status |
| `DELETE`| `/tasks/:id`  | Soft delete a task |

## 📖 API Documentation
After running the server, you can access the interactive API documentation at:
- **[Swagger UI - API Docs](http://localhost:3000/api-docs)**

## 🔒 Authentication Flow
1. **User signs up using `/auth/signup`** with valid details.
2. **Logs in using `/auth/login`** to receive a JWT token.
3. **Includes the JWT token** in the `Authorization` header for protected routes.
4. **Access secured endpoints** like `/tasks` using the bearer token.

## 💾 Database Schema
### 📌 Users Table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

### 📌 Tasks Table
```sql
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT DEFAULT NULL,
  status ENUM('pending','in-progress','completed') DEFAULT 'pending',
  completed_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TINYINT(1) DEFAULT 0
);
```

## 🏗 Future Enhancements
- ✅ User Registration and Role-Based Access Control (RBAC)
- ✅ Task Assignment to Specific Users
- ✅ WebSocket for Real-Time Task Updates
- ✅ Integration with Frontend Frameworks

## 📜 License
This project is open-source and available under the **MIT License**.

---
💡 **Need Help?** Feel free to reach out via [GitHub Issues](https://github.com/yourusername/express-tasks-api/issues)!

