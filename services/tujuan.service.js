const models = require("../models/index");
class TujuanService {
  async getAllTujuan(req, res) {
    try {
      const tujuan = await models.tujuan.findAll();
      return tujuan;
    } catch (error) {
      console.log(error);
    }
  }
  async addTujuan(req, res) {
    try {
      const { tujuan_name } = req.body;
      const tujuan = await models.tujuan.create({
        tujuan_name,
      });
      return tujuan;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new TujuanService();
