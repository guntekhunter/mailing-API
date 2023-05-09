const userService = require("../services/user.service");

class UserController {
  getRoot(req, res) {
    res.status(200).json({
      status: "ok",
      message: "API running",
    });
  }
  async getAllUsers(req, res) {
    const data = await userService.getAllUsers(req)
    return res.status(200).json({
      success: true,
      data: data,
    });
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
