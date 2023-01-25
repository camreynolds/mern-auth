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

### Lesson 8 - Creating a React app.
1. Move outside the backend folder and type in the console **npx create-react-app frontend**, this will create a react app inside a folder named frontend.
2. Inside frontend > src folder I gonna get rid of App.css, App.test.js, logo.svg, reportWebVitals.js, setupTests.js.
3. Inside frontedd > src > index.js file erase the **import reportWebVitals from './reportWebVitals';** and **reportWebVitals();** lines and comments too.
4. Inside frontedd > src > App.js file erase the **import logo from './logo.svg';** and **import './App.css';**.
5. Leave the App.js function like this:

```js:
    function App() {
      return (
        <div  className="App">
        </div>
      );
    }
    export default App;
```

6. Install the react-router-dom package so I'll can add different pages to this application later, to do that type in console: npm install react-router-dom
7. Import this components from react-route-dom. BrowserRouter, Routes and Route. Browserrouter wraps everywhere I want to use the route, Routes that wraps all the individual Route, and Route that create a single route.
8. Create a folder named **pages** and inside it create a Home.js file which is going to contain a react component which will be imported to App.js and use it in the element prop of the router with this path="/".
9. Create a folder named **component** and inside it create a Navbar.js file which is going to contain a react component which will be imported to App.js and use above the Routes component. In this file I'll imported the **Link** component to use as anchor tag.

### Lesson 9 - Fetching data from the API.
1. Import useEffect() and  useState() hook inside the Home.js file. The useEffect() hook fires a function when the component is render, if I need to only render once I've to pass a second argument that is a empty array.
2. Create a fetch function inside useEffect() hook.
3. Map the response from the backend and show everysingle object of the array in the component.
4. Add this code line inside the package.json file to avoid the CORS error.
```js:
    "proxy": "http://localhost:400",
```
This indicates that every petition that react doesn't recognize will be proxy to that direction, buy in this case that directión is my backend development server.
5. I created a new file in the components folder named WorkoutDetails.js which will be a template for every single workout that is mapped.
6. The index.css file was updated.