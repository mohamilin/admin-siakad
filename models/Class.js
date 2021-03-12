const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    kd_kelas : {
        type: String
    },
    kelas : {
        type: String
    },
    sekolah_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'schools'
    },
    no_absen : {
        type: Number
    },
    student_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students'
    },
    jurusan : {
        type: String,
        default: null
    },
    wali_kelas : [{
        guru_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'teachers'
        }
    }]
});

const Class = new mongoose.model('classes', classSchema);
module.exports = {Class}