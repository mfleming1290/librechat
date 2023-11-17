const passportLogin = require('./localStrategy');
const googleLogin = require('./googleStrategy');
const githubLogin = require('./githubStrategy');
const discordLogin = require('./discordStrategy');
const facebookLogin = require('./facebookStrategy');
const setupOpenId = require('./openidStrategy');
const jwtLogin = require('./jwtStrategy');

module.exports = {
  passportLogin,
  googleLogin,
  githubLogin,
  discordLogin,
  jwtLogin,
  facebookLogin,
  setupOpenId,
};
