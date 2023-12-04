
const express = require("express");
const session = require('express-session');
const passport = require("passport");
const app = express();
const cors = require ("cors");
const passportSetup =require("./passport");
const authRoute = require("./routes/auth");


app.use(
  session({
    secret: 'Tatah',
    resave: false,
    saveUninitialized: true,
  })
);

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(
    cors({
      origin: "http://localhost:3000",
      methods:"GET, POST, PUT, DELETE",
      credentials: true,
    })
  );

app.use("/auth", authRoute);

app.listen("5000", ()=>{
  console.log("Server is running!")
});