// model/Step.js 

// 사용자의 총 걸음수 저장 데이터베이스 

// ** 걸음수 모델 생성 ** 

const mongoose = require(`mongoose`);

const StepSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,

    },

    step: {
        type: Number,
        required: true,

    },

    time: {
        type: String,
        required: true,

    },
    location: {
        type: String,
        required: true,
        trim: true
    }

});

module.exports = mongoose.model("Step", StepSchema);