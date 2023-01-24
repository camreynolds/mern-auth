# Full MERN stack app

## Backend:

### Lesson 2 - Express App Setup.
1. Create the backend folder.
2. Create the a file a named it server.js this is the entry file of the backend application. It's where we are going to register the express app.
3. Create the package.json file inside the backend folder. **(npm init -y)**
4. Install the express package to be able to create an express app.

### Lesson 3 - Express Router & API Routes.
1. Create the routes folder wich will have inside all the app's routes.
2. Create the workouts.js file inside the routes folder.
3. Use express.Router() inside workouts.js
4. Edit server.js routes with the use of workoutsRoutes const.
5. Create all the handlers (get,post,delete,update) inside the workouts.js
6. Edit server.js file adding a middleware express.json() which attach the body (data) of a request if it exist to the request object of the handler.

### Lesson 4 - Mongo DB & Mongoose.
1. Edit th .env file to configure the mongo database URI.
2. Install the mongoose package. Mongoose is a ODM library. It wraps mongodb with a extra layer tha allows to use methods to read and write database documents, allows to declare modules and schemas. It adds a extra layer of structure the mongodb by itself doesn't provide.
3. I gonna use mongoose to connect to the database inside the server.js file.
4. Import mongoose to use that object to create the connection to the database.

### Lesson 5 - Mongoose: Models & Schemas.
1. Inside the backend folder create the model folder and inside it create the workoutModel.js file which will contain the Schema & Model. This schema and model fucntion will be provided by mongoose because mongo by it self is schemeless.
2. The schema define the structure a particular document in the database, and the model apply that schema to a particular module and We use that model to interact with a collection of that name.
3. Edit routes>workout.js import the workoutModel.js from models>workoutModel.js and edit the POST controller to extract the variables attached to the req.body object and use the model to interact with.

### Lesson 6 - Controllers (part 1).
1. Create a folder inside backend named controller and inside it a file named workoutController.js.
2. Inside workoutController.js I gonna created a bunch of functions that are going to be use or called in the router>workouts.js
3. I cutted the call of the workoutModel.js from routes>workout.js and pasted it to workoutController.js because here is where it's gonna be nedded now.
4. Edit the workoutController.js to create the GET,POST,DELETE,UPDATE handlers of /api/workouts entry point.
5. In the GET a single workout function I have to check if the id is a valid mongoose type objectId so I have to import mongoose en the file to create that validation inside the function.

### Lesson 7 - Controllers (part 2).
1. Edit the workoutController.js to create the GET,POST,DELETE,UPDATE handlers of /api/workouts entry point.
5. In the DELETE a single workout function I have to check if the id is a valid mongoose type objectId so I have to import mongoose en the file to create that validation inside the function.
6. Mongoose identify id as _id so in the deleteWorkout function I have to assign the value of id to _id.
7. In the PATCH / updateWorkout function I used the spread operator to use whatever is in the req.body to update.