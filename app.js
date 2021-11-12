const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require("helmet");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RateLimiter = require('express-rate-limit');

const app = express(); // App initialization

const usersController = require('./routes/users'); // User Controller

mongoose.connect(process.env.DB || 'mongodb://127.0.0.1:27017/meanApp', { useNewUrlParser: true }); // MongoDB Connection

app.disable('x-powered-by');
app.use(new RateLimiter({
    windowMs: 15 * 60 * 1000, // 15 Mins
    max: 100, // Max Request in windowsMs=15Min
    delayMs: 0, // delay a request
})); // Limmits requests per IP

app.use(cors({
  origin: 'http://localhost:4200' // Only allows this domain
})); // Cross Origin Resource Sharing
app.use(helmet()); // HELMET middleware for security
app.use(
  helmet.hidePoweredBy({
    setTo: "Phusion Passenger (mod_rails/mod_rack) 3.0.7" // Header that displays that ruby is used as backend
    // It is to distract the hacker. Now he will try to hack a ruby app but our code is in nodejs
  })
);
app.use(helmet.noCache()); // This middleware ensures that there is nochahe in the client side
app.use(helmet.noSniff()); // This middleware blocks MIME TYPE sniffing
app.use(helmet.referrerPolicy()); // This one ensures that no Referrer is sent with request => i.e if you redirect from http://localhost:3000 to http://localhost:4000, there won't be refferer header
app.use(helmet.frameguard({ action: 'deny' })); // Prevents Click Jacking
app.use(
  helmet.contentSecurityPolicy({
    // Specify directives as normal.
    directives: {
      defaultSrc: ["'self'", "mean-secure-app.herokuapp.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'", "stackpath.bootstrapcdn.com"],
      fontSrc: ["'self'", "fonts.com"],
      imgSrc: ["'self'", "mean-secure-app.herokuapp.com", "data:"],
      //sandbox: ["allow-forms", "allow-scripts"],
      //reportUri: "/report-violation",
      //objectSrc: ["'none'"],
      //upgradeInsecureRequests: true,
      //workerSrc: false // This is not set.
    },

    // This module will detect common mistakes in your directives and throw errors
    // if it finds any. To disable this, enable "loose mode".
    loose: false,

    // Set to true if you only want browsers to report errors, not block them.
    // You may also set this to a function(req, res) in order to decide dynamically
    // whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
    reportOnly: false,

    // Set to true if you want to blindly set all headers: Content-Security-Policy,
    // X-WebKit-CSP, and X-Content-Security-Policy.
    setAllHeaders: false,

    // Set to true if you want to disable CSP on Android where it can be buggy.
    disableAndroid: false,

    // Set to false if you want to completely disable any user-agent sniffing.
    // This may make the headers less compatible but it will be much faster.
    // This defaults to `true`.
    browserSniff: true
  })
); // Uses headers to set policy around 3rd party content (user input etc)
app.use(morgan('dev')); // Logging service
app.use(bodyParser.urlencoded({extended: false})); // Body Parser to parse incoming request data
app.use(bodyParser.json()); // Supports json data parsing
app.use(express.static(path.join(__dirname, 'public'))); // Static Folder where our compiled angular will be

app.use('/users/', usersController); // register the user Controller 

app.listen(process.env.PORT || 3000, () => console.log('server started on port 3000')); // Starts app and logs data on console
