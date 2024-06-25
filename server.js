const express = require("express");
// creating object of express
const app = express();
// importing db object
const db = require("./db");
// declaring 'bodyParser'
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// importing auth.js for authentication
const passport = require('./auth');


// middleware for logs
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}]  Request made to :  ${req.originalUrl} ` );
  next();
};

app.use(logRequest); // log for each end point
// Root route
app.get("/", logRequest, (req, res) => {
  res.send("Welcome to UMT HMS ");
});

// after writing logic, now which route we want to authenticate
// we are applying authentication on '/person' route
app.use(passport.initialize())    // initializing passport first
const LocalAuthMiddleware = passport.authenticate('local', {session : false})

// importing person route file            // 5- import router file
const personRoutes = require("./routes/r-person");
app.use("/person", personRoutes); // 6- use router file

// importing hostelDetaail route file
const hostelDetail = require("./routes/r-hostel");
app.use("/hostel", hostelDetail);

app.listen(3000, () => {
  console.log("App is listning at port 3000 (server)");
});
