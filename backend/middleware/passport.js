
const { Strategy, ExtractJwt } = require('passport-jwt');
require("dotenv").config(); // loading env variables
const User = require("../models/User");

// These options are used in authorizing routes
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}

// This function is used in authorizing routes
module.exports = passport => {
    passport.use(new Strategy(opts, async (payload, done) => {
        await User.findById(payload.id).then(async user => {
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        }).catch((err) => {
            return done(null, false);
        });
    }));
};