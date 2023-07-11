// controllers/stepController.js


// ** 걸음수 컨트롤러 ** 

const step = require(`../model/Step`);

module.exports = {

    // 실시간 걸음수, 위치 추가 
    update: (req, res) => {
        let userSteps = new step({
            email: req.body.email,
            step: req.body.step,
            time: req.body.time,
            location: req.body.location
        });
        console.log(userSteps);

        let updated = { update: true };

        userSteps
            .save()
            .then((result) => {
                console.log(result);
                res.send(updated);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}


