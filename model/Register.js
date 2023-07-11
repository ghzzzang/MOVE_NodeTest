// model Register.js

// ** 회원가입 모델 생성 ** 

const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    birthDate: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    },
    nickname: {
        type: String
    },
    password: {
        type: String
    },
    province: {
        type: String
    },
    sex: {
        type: String
    }
});


module.exports = mongoose.model("sign", registerSchema);