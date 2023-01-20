# Full MERN stack app

## Backend:

### Lesson 2
1. Create the backend folder.
2. Create the a file a named it server.js this is the entry file of the backend application. It's where we are going to register the express app.
3. Create the package.json file inside the backend folder. **(npm init -y)**
4. Install the express package to be able to create an express app.

### Lesson 3
1. Create the routes folder wich will have inside all the app's routes.
2. Create the workouts.js file inside the routes folder.
3. Use express.Router() inside workouts.js
4. Edit server.js routes with the use of workoutsRoutes const.
5. Create all the handlers (get,post,delete,update) inside the workouts.js
6. Edit server.js file adding a middleware express.json() which attach the body (data) of a request if it exist to the request object of the handler.

### Lesson 4
1. Edit th .env file to configure the mongo database URI.
2. Install the mongoose package. Mongoose is a ODM library. It wraps mongodb with a extra layer tha allows to use methods to read and write database documents, allows to declare modules and schemas. It adds a extra layer of structure the mongodb by itself doesn't provide.
3. I gonna use mongoose to connect to the database inside the server.js file.
4. Import mongoose to use that object to create the connection to the database.