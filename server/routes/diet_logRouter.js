const{ response } = require('express');
const express = require('express');
const diet_logController = require('../controllers/diet_logController');

function routes(DietLog){
    const diet_logRouter = express.Router();
    const controller = diet_logController(DietLog);
    diet_logRouter.route('/diet_log')
        .post(controller.post)
        .get(controller.get);

    diet_logRouter.route('/diet_log/:user_id/last7')
        .get(controller.getLast7Days);
    
    diet_logRouter.route('/diet_log/:user_id/average')
        .get(controller.userAllAverage);

    diet_logRouter.route('/diet_log/:user_id/averageLast7')
        .get(controller.userAverageLast7Days);

    diet_logRouter.route('/diet_log/app_average')
        .get(controller.AppPopulationAverage);

    diet_logRouter.route('/diet_log/:user_id')
        .get(controller.getDietLog);

    diet_logRouter.route('/diet_log/:id')
        .delete(controller.deleteDietLog);

    return diet_logRouter;
}

module.exports = routes;