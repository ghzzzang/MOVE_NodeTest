// controller/registerController.js

// ** 회원가입 요청처리 ** 

const sign = require("../model/Register");
const step = require("../model/Step");



module.exports = {

    // 회원가입 페이지 
    getRegisterPage: (req, res) => {
        res.render("register");
    },
    // 회원가입 생성
    Register: (req, res) => {
        // 회원
        let newUser = new sign({
            birthDate: req.body.birthDate,
            email: req.body.email,
            nickname: req.body.nickname,
            password: req.body.password,
            province: req.body.province,
            sex: req.body.sex
        });
            
        let connect = { email: req.body.email, nickname: req.body.nickname };

        // 회원가입 저장 
        newUser
            .save()
            .then((result) => {
                console.log(result);
                res.send(connect);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    // 로그인 액션 
    Login: (req, res, next) => {
        let userEmail = req.body.email,
            userPassword = req.body.password; // 앱에서 사용자가 보낸 이메일(아이디), 패스워드 
        console.log(`${userEmail}, ${userPassword}`);

        sign.findOne({
            email: userEmail
        })
            .then(user => {
                if (user && user.password == userPassword) {
                    console.log("email & password is correct");
                    console.log(user);
                    const loginInfo = {
                        nickname: user.nickname,
                        email: user.email,
                        province: user.province,
                        sex: user.sex,
                        success: true
                    }

                    res.send(loginInfo);
                    next();

                }
                else {
                    console.log("email & password is uncorrect");
                    res.send({ success: false });
                }

            })
            .catch(error => {
                console.log(`Error logging in user: ${error.message}`);
                next(error);
            });

    },
    // 로그인 성공시 보내는 데이터 
    responseLogin: (req, res) => {
        console.log(`complete!!`);
        const status = 200;

    }

};