# Secure Mean App
It is a sample Mean (Mongo, Express, Angular, Node) app in which our focus is on the security.We used the Helmet to secure the app. You can install helmet by typing `npm i helmet` in the console.
## Prerequisits
Before you may run it, you must have node.js 6+ installed along with npm and mongodb.
Then clone this repo and install all the dependencies by typing `npm install` in the root directory and the frontend directory as well.
All our Angular source Code is in the frontend directory and gets compiled into public directory (which is set as a static directory for express application).
## Run the App
After installing all the dependencies, you can run the application by typing `npm start` in the console.You may also need to compile the Angular Source (if you're using it in production) by typing command `ng build --prod` in frontend directory or you may go with development server as well by typing `ng serve`. 