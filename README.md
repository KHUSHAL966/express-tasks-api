# Express Tasks API

A simple task management API built with Express.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KHUSHAL966/express-tasks-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd express-tasks-api
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. The API will be available at `http://localhost:3000`.

## API Endpoints

### Tasks

- **Get all tasks**
  - **URL:** `/tasks`
  - **Method:** `GET`
  - **Description:** Retrieve a list of all tasks.
  
- **Get a task by ID**
  - **URL:** `/tasks/:id`
  - **Method:** `GET`
  - **Description:** Retrieve a task by its ID.
  
- **Create a new task**
  - **URL:** `/tasks`
  - **Method:** `POST`
  - **Description:** Create a new task.
  - **Request Body:**
    ```json
    {
      "title": "Task title",
      "description": "Task description"
    }
    ```
  
- **Update a task**
  - **URL:** `/tasks/:id`
  - **Method:** `PUT`
  - **Description:** Update an existing task by its ID.
  - **Request Body:**
    ```json
    {
      "title": "Updated task title",
      "description": "Updated task description"
    }
    ```

- **Delete a task**
  - **URL:** `/tasks/:id`
  - **Method:** `DELETE`
  - **Description:** Delete a task by its ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
