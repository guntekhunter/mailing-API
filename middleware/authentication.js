const jwt = require("jsonwebtoken");

const tokenBlacklist = [];
class Authentication {
  async requiredToken(req, res, next) {
    try {
      const bearerToken = req.headers.authorization;
      const tokenInclude = bearerToken.split(" ")[1];
      console.log(tokenBlacklist)
      if (tokenBlacklist.includes(tokenInclude)) {
        return res.sendStatus(401);
      }
      if (bearerToken) {
        const token = bearerToken.split(" ")[1];
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = payload;
        next();
      } else {
        return res.sendStatus(401);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async removeToken(req, res, next) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (token) {
        tokenBlacklist.push(token);
      }
      next();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Authentication();
