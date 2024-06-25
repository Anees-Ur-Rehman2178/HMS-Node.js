// importing passport and strategy and also schema
const passport = require("passport");    // 1st passprt import 
const LocalStrategy = require("passport-local").Strategy;  // 2nd strategy import
const person = require("./model/s-person");     // model import

// function to check password is valid or not (logic)
passport.use(
    new LocalStrategy(async (name, password, done) => {
      try {
        console.log("Credientials received", name, password);
        const user = await person.findOne({ name: USERNAME });
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        } // after user find, now match password
        const isPasswordMatch = await user.comparepassword(password)
        if (isPasswordMatch) {
          return done(null, user);
        } else {
          return done(null, flase, { message: "Incorrect password" });
        }
      } catch (error) {
        return done(error);
      }
    })
  );
  
  module.exports = passport     // exporting passport