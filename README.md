# Full MERN stack app

## Workouts Backend:

### Lesson 2 - Express App Setup.
1. Create the backend folder.
2. Create the a file a named it server.js this is the entry file of the backend application. It's where we are going to register the express app.
3. Create the package.json file inside the backend folder with:
```js:
    npm init -y
```
4. Install the express package to be able to create an express app.

### Lesson 3 - Express Router & API Routes.
1. Create the routes folder which will have inside all the app's routes.
2. Create the workouts.js file inside the routes folder.
3. Use express.Router() inside workouts.js
4. Edit server.js routes with the use of workoutsRoutes const.
5. Create all the handlers (get,post,delete,update) inside the workouts.js
6. Edit server.js file adding a middleware express.json() which attach the body (data) of a request if it exist to the request object of the handler.

### Lesson 4 - Mongo DB & Mongoose.
1. Edit the .env file to configure the mongo database URI.
2. Install the mongoose package. Mongoose is a ODM library. It wraps mongodb with a extra layer tha allows to use methods to read and write database documents, allows to declare modules and schemas. It adds a extra layer of structure that the mongodb by itself doesn't provide.
3. I gonna use mongoose to connect it to the database inside the server.js file.
4. Import mongoose to use that object to create the connection to the database.

### Lesson 5 - Mongoose: Models & Schemas.
1. Inside the backend folder create the model folder and inside it create the workoutModel.js file which will contain the Schema & Model. This schema and model fucntion will be provided by mongoose because mongo by itself is schemeless.
2. The schema define the structure a particular document in the database, and the model apply that schema to a particular model and We use that model to interact with a collection of that name.
3. Edit routes > workout.js import the workoutModel.js from models > workoutModel.js and edit the POST controller to extract the variables attached to the req.body object and use the model to interact with.

### Lesson 6 - Controllers (part 1).
1. Create a folder inside backend named **controller** and inside it a file named **workoutController.js**.
2. Inside **workoutController.js** I gonna created a bunch of functions that are going to be use or called in the router > workouts.js
3. I cutted the call of the **workoutModel.js** from routes > workout.js and pasted it to **workoutController.js** because here is where it's gonna be nedded now.
4. Edit the **workoutController.js** to create the GET,POST,DELETE,UPDATE handlers of /api/workouts entry point.
5. In the GET a single workout function I have to check if the id is a valid mongoose type objectId so I have to import mongoose en the file to create that validation inside the function.

### Lesson 7 - Controllers (part 2).
1. Edit the **workoutController.js** to create the GET,POST,DELETE,UPDATE handlers of /api/workouts entry point.
5. In the DELETE a single workout function I have to check if the id is a valid mongoose type objectId so I have to import mongoose in the file to create that validation inside the function.
6. Mongoose identify id as _id so in the deleteWorkout function I have to assign the value of id to _id.
7. In the PATCH / updateWorkout function I used the spread operator to use whatever is in the req.body to update.

## Workouts Frontend:

### Lesson 8 - Creating a React app.
1. Move outside the backend folder and type in the console (this will create a react app inside a folder named frontend.)
```js:
  npx create-react-app frontend
```
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
6. Install the react-router-dom package so I'll can add different pages to this application later, to do that type in console: 
```js:
    npm install react-router-dom
```
7. Import this components from react-route-dom. BrowserRouter, Routes and Route. Browserrouter wraps everywhere I want to use the route, Routes that wraps all the individual Route, and Route that create a single route.
8. Create a folder named **pages** and inside it create a Home.js file which is going to contain a react component which will be imported to App.js and use it in the element prop of the router with this path="/".
9. Create a folder named **component** and inside it create a Navbar.js file which is going to contain a react component which will be imported to App.js and use above the Routes component. In this file I'll imported the **Link** component to use as anchor tag.

### Lesson 9 - Fetching data from the API.
1. Import useEffect() and  useState() hook inside the Home.js file. The useEffect() hook fires a function when the component is render, if I need to only render once I've to pass a second argument that is a empty array.
2. Create a fetch function inside useEffect() hook.
3. Map the response from the backend and show every single object of the array in the component.
4. Add this code line inside the package.json file to avoid the CORS error. (This indicates that every petition that react doesn't recognize will be proxy to that direction, but in this case that directión is my backend development server.)
```js:
    "proxy": "http://localhost:400",
```
5. I created a new file in the components folder named WorkoutDetails.js which will be a template for every single workout that is mapped.
6. The index.css file was updated.

### Lesson 10 - New Workout Form.
1. The file WorkoutForm.js was created insde the components folder. This will be use to add new workouts to the database.
2. Import the **WorkoutForm.js** component to the **Home.js** page.
3. Update the **index.css** file.

### Lesson 11 - Adding React Context.
1. Create **context** folder inside the frontend > src folder. 
2. Add a new file to **context** folder and named it **WorkoutContext.js**
3. Import **WorkoutContextProvider** to the **index.js** and wraps it. So every component in the app has access to this context.
4. Create a custom **hooks** folder inside **src**.
5. Add **useWorkoutsContext.js** file to **hooks** folder. This will be use to define where I wanna use the workout context.
6. Import the **useWorkoutsContext.js** tho the **Home.js**.
7. Edit the **Home.js** file, so I don't goona need the useState hook to update the state instead of that I gonna use the dispatch function.
8. Edit the **WorkoutForm.js** and import the **useWorkoutsContext.js** to update the UI and keep sync with the database.

### Lesson 12 - Deleting data.
1. Create a **delete button** inside **WorkoutDetails.js**
2. Create a span with a handleClick() function that manages the logic necessary to make the request to the database, and keep sync the UI with the database too.
```js:
  <span onClick={handleClick}>delete</span>
```

### Lesson 13 - Handling Error Responses.
1. Create a better error message and highlight input fields to indicate where the error is.
2. Edit the **createWorkout** controller in the backend to handle the errors in a better way.
3. Edit the **WorkoutForm.js** in the frontend to handle the error in the UI.
4. Use the **emptyFields** in the **WorkoutForm.js** to style the inputs.
5. Edit the frontend **index.css** to highlight the inputs if there is an error.

### Lesson 14 - Finishing touches.
1. Make a trash icon instead of the word "delete" in the **WorkoutDetails.js**. For that I gonna use material icon from google library.
2. Edit the frontend > public > index.html file to insert a link to google material icon.
3. Install the package **date-fns** which is a package to format the date in a more good looking way.
4. Import **date-fns** to **WorkoutDetails.js**.
 
## Users Backend:

### Lesson-users 2 - User Routers, Controllers & Model.
1. Create an **user.js** file inside **routes** folder. I gonna do this importing **express** and then invoking **express.Router()** to make the users routes.
2. There's going to be two routes one for **/login** and another one forn **/signup** and both of then are gonna be **POST** request.
3. After routes done. I cretaed a **userController.js** file inside the **controllers** folder, and the functions inside in are goona have the logic for login, and signup.
4. Import the **userController.js** to the **/routes > user.js**.
5. Create a Schena for users, so I'm going to create a file named **userSchema.js** inside the **model** folder, then that file is going to be imported to the **userController.js** file to be used from there.
6. Edit the **server.js** file to add the **user.js** file and add it to the routes.

### Lesson-users 3 - Signing Up & Hashing Password.
1. Create a static method inside the **userModel.js** this static will be called "signup" and his structure is as it follows:
```js:
  userSchema.statics.signup = fucntion(){}
```
2. Install **bcrypt** to use it to hash the password in the signup static function.
3. Import the **userModel.js** to the **userController.js** file to use the signup static funtion.

### Lesson-users 4 - Email & Password validation.
1. Install a package called **validator** to validated the email, and password.
2. Require **validator** package inside the **userSchema.js** file and edit the signup static method to use **validator**.

### Lesson-users 6 - Signing tokens.
1. Install **jsonwebtoken** package
2. Require the **jsonwebtoken** pakage to the **userController.js** file
3. Create the secret word in the enviroment file to hash the **jsonwebtoken**
4. Edit the **signup** function to implement the **jsonwebtoken**
5. Create a custom re-usablefunction called **createToken** so this function can be called inside the login function and the signup function.

### Lesson-users 7 - Logging users in.
1. Create a static method inside the **userModel.js** this static will be called "login" and his structure is as it follows:
```js:
  userSchema.statics.login = fucntion(){}
```
this function is gonna have almost the same structure fo **userSchema.statics.signup** function, just that in this time I gonna use the **bcryp.compare** method to evaluate if the use is typing a valid email.
2. Import the **userModel.js** to the **userController.js** file to use the login static funtion.

## Users Frontend:

### Lesson-users 8 - React Auth Context.
1. Add a new file to **context** folder and named it **AuthContext.js**
2. Import **AuthContextProvider** to the **index.js** and wraps it. So every component in the app has access to this context.
3. Create a custom **hooks** folder inside **src**.
4. Add **useAuthContext.js** file to **hooks** folder. This will be use to define where I wanna use the auth context.

### Lesson-users 9 - Sign up & Login Forms.
1. Inside the **pages** folder create a two files, one called **Signup.js** and another one called **Login.js**, both files are gonna be forms where the user will use to access to the app.
2. Edit the **App.js** file to register the routes for both files, **Signup.js** and **Login.js**
3. Edit the **Navbar.js** component to add the signup and login link.
4. Edit the **index.css** to improve the app view.

### Lesson-users 10 - Making an useSignup Hook
1. Create a hook called **useSignup.js** this hook will have all the logic tha is gonna be import to the **pages > Signup.js** file an it will update the state of the **AuthContext.js**.

### Lesson-users 11 - Making an useLogout Hook
1. Create a hook called **useLogout.js** this hook doesn't need to communicate with the backend it only has to update the react app deleting the localStorage item and using the **useAuthContext.js** to dispatch the LOGOUT action.type.
2. Edit the **Navbar.js** component and create a LOGOUT button, and import the **useLogout.js** hook to use it with the onClick event.
3. Edit the **index.css** file.

### Lesson-users 12 - Making an useLogin Hook
1. Create a hook called **useLogin.js** this hook will have all the logic tha is gonna be import to the **pages > Login.js** file an it will update the state of the **AuthContext.js**.

### Lesson-users 13 - Setting initial AuthState
1. Import the **useAuthContext.js** to the **Navbar.js** component and then evaluate if there is a valid user in the context swap between signup/login div and logout div.
2. Edit the **AuthContex.js** to check if there is a valid user when the app first starts. Use the **useEffect** hook inside the **AuthContextProvider** function to do this.

### Lesson-users 14
1. Create a middleware function that fires for every single routes before the controllers functions and that middleware is gonna check that the user is authenticated, and to do that needs to check if the request came loaded with the token of the user, and check if the token is a valid token and hasn't changed. 
2. Go to backend folder and create a folder inside it named "middleware" and inside the middleware folder create a file named **requireAuth.js** 
3. Import the **requireAuth.js** file to the **routes > workout.js** to used it as middlewaare