const models = require("../models/index");
class MailingService {
  async getAllMailing(req, res) {
    try {
      const mailing = await models.mailing.findAll();
      return mailing;
    } catch (error) {
      console.log(error);
    }
  }
  async addMailing(req, res) {
    try {
      const {
        tujuan,
        no_surat,
        nama_pihak_satu,
        alamat_pihak_satu,
        jabatan_pihak_satu,
        nama_pihak_dua,
        tempat_lahir_pihak_dua,
        ktp_pihak_dua,
        tanggal_lahir_pihak_dua,
        alamat_pihak_dua,
        tugas_pihak_dua,
        job_detail,
        job_result,
        payment_detail,
        start_date,
        end_date,
        pembayaran,
        ttd_pihak_satu,
        ttd_puhak_dua,
        nama_bank,
        no_rekening,
        pembayaran_pertama,
        pembayaran_kedua,
      } = req.body;
      const mailing = await models.mailing.create({
        tujuan,
        no_surat,
        nama_pihak_satu,
        alamat_pihak_satu,
        jabatan_pihak_satu,
        nama_pihak_dua,
        tempat_lahir_pihak_dua,
        ktp_pihak_dua,
        tanggal_lahir_pihak_dua,
        alamat_pihak_dua,
        tugas_pihak_dua,
        job_detail,
        job_result,
        payment_detail,
        start_date,
        end_date,
        pembayaran,
        ttd_pihak_satu,
        ttd_puhak_dua,
        nama_bank,
        no_rekening,
        pembayaran_pertama,
        pembayaran_kedua,
      });
      return mailing;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteMailing(id, req) {
    try {
      const isExist = await models.mailing.findOne({
        where: {
          id: id,
        },
      });
      if (!isExist) {
        console.log("not found");
      }

      models.mailing.destroy({
        where: {
          id: id,
        },
      });
      return isExist
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id, req){
    try{
      const mailing = await models.mailing.findOne({
        where: {
          id:id
        }
      })
      if(!mailing){
        console.log("not found")
      }
      return mailing
    }catch(error){
      console.log(error)
    }
  }
}
module.exports = new MailingService();
