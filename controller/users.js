const userService = require("../services/user.service");

class UserController {
  getRoot(req, res) {
    res.status(200).json({
      status: "ok",
      message: "API running",
    });
  }
  async getAllUsers(req, res) {
    const data = await userService.getAllUsers(req);
    return res.status(200).json({
      success: true,
      data: data,
    });
  }

  async createUser(req, res) {
    try {
      console.log(req.body);
      const data = await userService.addUser(req);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async login(req, res) {
    try {
      const data = await userService.loginUser(req);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async removeUser(req, res) {
    try {
      const id = req.params.id;
      const data = await userService.deleteUser(id, req);
      console.log(data);
      if (data !== null) {
        return res.status(200).json({
          success: "user deleted",
          data: data,
        });
      } else {
        return res.status(500).json({
          data: "user with that id dosn't exist",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();
// const model = require("../models");

// const userController = {};

// userController.getAll = async function (req, res) {
//   try {
//     await model.users.findAll().then((result) => {
//       if (result.length > 0) {
//         res.status(200).json({
//           message: "Get Method Users",
//           data: result,
//         });
//       } else {
//         res.status(200).json({
//           message: "Tidak ada Data",
//           data: [],
//         });
//       }
//     });
//   } catch (error) {
//     res.status(404).json({
//       message: error,
//     });
//   }
// };

// module.exports = userController;
