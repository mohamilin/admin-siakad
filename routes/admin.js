const express = require('express');
const router = express.Router();
const {viewDashboard} = require("../controllers/dashboard")
const {viewLembaga} = require("../controllers/lembaga")
const {viewTahunPelajaran} = require("../controllers/tahunPelajaran")
const {viewGuru} = require("../controllers/guru")
const {viewKelas} = require("../controllers/kelas")
const {viewMatePelajaran} = require("../controllers/mapel")


router.get('/dashboard', viewDashboard)
router.get('/lembaga', viewLembaga)
router.get('/tahun-pelajaran', viewTahunPelajaran)
router.get('/guru', viewGuru)
router.get('/kelas', viewKelas)
router.get('/mapel', viewMatePelajaran)



module.exports = router;