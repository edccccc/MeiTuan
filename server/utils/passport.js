const passport = require('koa-passport')
const LocalStrategy = require('passport-local')
const userModel = require('../dbs/models/user')
// passport.use(new LocalStrategy(
//   (username, password, done) => {
//     userModel.findOne({
//       username
//     }, function (err, user) {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false);
//       }
//       if (!user.verifyPassword(password)) {
//         return done(null, false);
//       }
//       return done(null, user);
//     });
//   }
// ));
passport.use(new LocalStrategy(
  function (username, password, done) {
    userModel.findOne({
      username: username
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.password !== password) {
        return done(null, false);
      }
      return done(null, user);
    });
  }
));
passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

module.exports = passport
