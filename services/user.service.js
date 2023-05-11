const models = require("../models/index");
const bcrypt = require("bcryptjs");

// for bycrypt password
const saltRounds = 10;
class UserService {
  // get all user
  async getAllUsers(req, res) {
    console.log("seccess");
    try {
      const users = await models.Users.findAll();
      return users;
    } catch (err) {
      console.log(err);
    }
  }

  // create user
  async addUser(req) {
    try {
      const user_name = req.body.user_name;
      const email = req.body.email;
      // bycript password
      const password = await bcrypt.hash(req.body.password, saltRounds);
      const user = await models.Users.create({
        user_name,
        email,
        password,
      });
      return user;
    } catch (err) {
      console.log(err);
    }
  }
  // login
  async loginUser(req, res) {
    try {
      const enteredPasword = req.body.password;
      const user = await models.Users.findOne({
        where: {
          email: req.body.email,
        },
      });
      const checkPassword = await bcrypt.compare(enteredPasword, user.password);

      if (checkPassword) {
        return user;
      } else {
        return null;
      }
      // return user;
    } catch (error) {
      console.log(error);
    }
  }

  // delete user
  async deleteUser(id, req) {
    try {
      const isExist = await models.Users.findOne({
        where: {
          id: id,
        },
      });

      if (!isExist) {
        console.log("not found");
      }

      models.Users.destroy({
        where: {
          id: id,
        },
      });

      return isExist;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserService();
