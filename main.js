// main.js 


// 웹서버 시작 

const port = 3000,
    express = require("express"),
    app = express(),
    layouts = require("express-ejs-layouts"),
    registerController = require("./controllers/registerController.js"),
    homeController = require("./controllers/homeController.js"),
    stepController = require("./controllers/stepController.js");

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/Move",
    { useNewUrlParser: true }
);

const db = mongoose.connection;


db.once("open", () => {
    console.log(`database connected!`);
});

/**
 * Listing 12.7 (p. 179)
 * ejs 레이아웃 렌더링
 */
app.set("view engine", "ejs"); // ejs를 사용하기 위한 애플리케이션 세팅
app.use(layouts); // layout 모듈 사용을 위한 애플리케이션 세팅
app.use(express.static("public"));

/**
 * Listing 12.4 (p. 177)
 * body-parser의 추가
 */
app.use(
    express.urlencoded({
        // URL 인코드와 JSON 파라미터 처리를 위한 body-parser의 사용을 Express.js에 선언
        extended: false,
    })
);

app.use(express.json());

// ** 라우터 추가 (router)
const router = express.Router();
app.use("/", router);


// ** 초기 화면 라우팅 ** 
router.get("/", homeController.showHome);

router.get("/signUp", registerController.getRegisterPage);
router.post("/signUp", registerController.Register);
router.post("/signIn", registerController.Login, registerController.responseLogin);
router.post("/step", stepController.update);

// ** 웹서버 시작 ** 

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
