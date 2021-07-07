# Live Website https://kanban-board12.netlify.app/

## Installation and Setup Instructions for backend

You will need node and npm installed globally on your machine.

Before proceeding, create a .env file and configure your environment variables within .env.

You can see the database table in mongodb compass using the url -

```
mongodb+srv://admin:eUCBITfH4Z2swYiy@cluster0.ao5wu.mongodb.net/kanban-board?retryWrites=true&w=majority
```

## install dependencies

go to the server folder

```
$ cd server
```

```
$ npm install
```

## To Start Server:

```
$ node app.js
```

## To Visit App:

localhost:5000

### APIS

```
Categories - localhost:5000/api/categories
```

```
Tasks - localhost:5000/api/tasks
```

# Installation and Setup Instructions for frontend

You will need node and yarn installed globally on your machine.

## Install dependencies

go to the client folder.

```
$ cd client
```

```
$ yarn install
```

## To Start Server:

```
$ yarn start
```

## To Visit App:

localhost:3000
