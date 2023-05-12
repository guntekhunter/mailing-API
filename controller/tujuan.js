const tujuanService = require("../services/tujuan.service");

class TujuanController {
  async getAllTujuan(req, res) {
    try {
      const data = await tujuanService.getAllTujuan(req, res);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async createTujuan(req, res) {
    try {
      const data = await tujuanService.addTujuan(req);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new TujuanController();
