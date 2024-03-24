# greenmentor-crud-assignment
# Project Title
  Task Management project.
## Introduction
This is a Task managegmet app which allow to create a new task with title and description,update and delete your task with the help of this app you can manage your task and save your time.
## Project Type
It is a Fullstack solo project
## Deplolyed App

### Frontent
Link - https://stalwart-bienenstitch-df572f.netlify.app/

### Backent
Lik - https://greenmentor-assignment-backend.vercel.app/

## Video Walkthrough of the project

   Link- https://drive.google.com/file/d/1nODXlszUnzOfOGYMjbPB3h-J_zA_IMHS/view?usp=sharing


## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For your local system.
### Frontend
Locally it will run:- http://localhost:3000/
```bash
clone git clone  https://github.com/Upendrapal0607/todo-app.git
cd /frontend/greenmentor-crud-app
npm npm install
npm npm start or npm run start
```

### Backend
Locally it will run:- http://localhost:8080/
```bash
clone same repo for backend
cd backend
npm npm install
npm npm run server
```
### Database
.env file have variable: access from .env.local file bariable - (MongoDB_URL,LOGIN_SECRET and PORT)
MongoDB_URL, you want to connect to within your database so use it.
you have to add it for make connection with the server

## API Endpoints
### User 
- GET /user/ - retrieve all user
- POST /user/add/ - new registation 
- POST /user/login/ login exist user
- POST /user/logout/ logout exist user 
### Task 
- GET /task/ - retrieve all tasks list 
- POST /task/addtask - create a new task
- PATCH /task/update/:taskId update single task
- DELETE /task/delete/:taskId delete single  

## Technology Stack
- Node.js
- Express.js
- MongoDB
- React.js
- Tailwind css
- Redux 
- Other libraries/modules