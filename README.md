## A FULL STACK TO-DO APP

This project contains a simple to-do application.
It has the following features:-

- Anyone can create a todo's
- Anyone can see their existing todo's
- Anyone can mark their todo's as done

## Installation Guide

### Requirements
  - [Nodejs](https://nodejs.org/en/download)
  - [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)
  
Both should be installed and make sure mongodb is running.

```shell
git clone https://github.com/ikunal-04/todo-app.git
cd todo-app
```
Now install the dependencies:

```shell
cd backend
npm install
cd ..
cd frontend
npm install
```

### Guide to run locally

For Frontend.
```shell
cd frontend
npm run dev
```

For Backend.
```shell
cd backend
node index.js
```

## Features to be implemented.

- [x] Anyone can create a new todo.
- [x] Anyone can see their existing todo's.
- [ ] Implementation of logic for Mark as done button.
- [ ] Implement authentication of users using JWT'S.
- [ ] Make UI cleaner and appeling using Chakra UI or Shadcn and React.
- [ ] Implemenation of axios library rather than the one that is currently used for fetching the response from backend to frontend.