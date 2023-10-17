# TODO App

## An assingment for Verificient Technologies

> **Description:** This is a simple TODO app built with Python and Angular.

### Prerequisites:

- Python 3.10
- Node.js 18.x
- SQLite3

### Installation:

- Install Node.js.

```
> curl -s https://deb.nodesource.com/setup_18.x | sudo bash
> apt install nodejs
```

- Install Angular globally.

```
> npm install -g @angular/cli@15
```

- Install SQLite3 Dev Libraries.

```
> apt-get install sqlite3 libsqlite3-dev
```

### Clone the project

Clone the repository to your local machine:

```
> git clone https://github.com/sharul15/verificent_assignment.git
```

Let's consider this directory as a `PROJ_DIR`.

### Initilize the backend

- Navigate to the backend directory and install the Python requirements:

```
> cd PROJ_DIR/backend/todo_back/
> pip install -r requirements.txt
```

- Run the database migrations:

```
> python manage.py migrate
```

- Start the Python backend server:

```
> python manage.py runserver_plus
```

### Initilize the frontend

- Navigate to the frontend directory and install the Node.js requirements:

```
> cd PROJ_DIR/frontend/todo-front/
> npm install
```

- Start the Angular development server:

```
> ng serve
```

### Usage:

Visit the following link in your web browser to view the app:
http://localhost:4200/#pending
