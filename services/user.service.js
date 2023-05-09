const models = require("../models/index");

class UserService {
  async getAllUsers(req, res) {
    console.log("seccess");
    console.log(req);
    try {
      const users = await models.Users.findAll();
      return users;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserService();
