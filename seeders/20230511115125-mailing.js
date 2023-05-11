"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "mailings",
      [
        {
          tujuan: "ahhay",
          no_surat: "ahhay",
          nama_pihak_satu: "ahhay",
          alamat_pihak_satu: "ahhay",
          jabatan_pihak_satu: "ahhay",
          nama_pihak_dua: "ahhay",
          tempat_lahir_pihak_dua: "ahhay",
          ktp_pihak_dua: "ahhay",
          tanggal_lahir_pihak_dua: "ahhay",
          alamat_pihak_dua: "ahhay",
          tugas_pihak_dua: "ahhay",
          job_detail: "ahhay",
          job_result: "ahhay",
          payment_detail: "ahhay",
          start_date: "ahhay",
          end_date: "ahhay",
          pembayaran: "ahhay",
          ttd_pihak_satu: "ahhay",
          ttd_puhak_dua: "ahhay",
          nama_bank: "ahhay",
          no_rekening: "ahhay",
          pembayaran_pertama: "ahhay",
          pembayaran_kedua: "ahhay",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tujuan: "ahhay",
          no_surat: "ahhay",
          nama_pihak_satu: "ahhay",
          alamat_pihak_satu: "ahhay",
          jabatan_pihak_satu: "ahhay",
          nama_pihak_dua: "ahhay",
          tempat_lahir_pihak_dua: "ahhay",
          ktp_pihak_dua: "ahhay",
          tanggal_lahir_pihak_dua: "ahhay",
          alamat_pihak_dua: "ahhay",
          tugas_pihak_dua: "ahhay",
          job_detail: "ahhay",
          job_result: "ahhay",
          payment_detail: "ahhay",
          start_date: "ahhay",
          end_date: "ahhay",
          pembayaran: "ahhay",
          ttd_pihak_satu: "ahhay",
          ttd_puhak_dua: "ahhay",
          nama_bank: "ahhay",
          no_rekening: "ahhay",
          pembayaran_pertama: "ahhay",
          pembayaran_kedua: "ahhay",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
