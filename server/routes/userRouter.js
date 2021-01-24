const{ response } = require('express');
const express = require('express');
const userController = require('../controllers/userController');

function routes(User){
    const userRouter = express.Router();
    const controller = userController(User);
    userRouter.route('/user')
        .post(controller.post)
        .get(controller.get);

    //middleware
    userRouter.use('/user/:username', (req, res, next) =>{
        User.findOne({username: req.params.username}, (err, user) =>{
            if(err) {
                res.sendStatus(500);
                return res.send(error);
            }
            if(user){
                req.user = user;
                return next();
            }
           return res.sendStatus(404);
        });
    });

    userRouter.route('/user/:username')
        .get(controller.getUser)
        .put(controller.putUser)

        .patch(controller.patchUser)
        .delete(controller.deleteUser);

    return userRouter;
}

module.exports = routes;