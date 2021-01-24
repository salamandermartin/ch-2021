const mongoose = require('mongoose')


function diet_logController(DietLog) {

    function post(req, res) {
        const diet_log = new DietLog(req.body);

        diet_log.save();
        return res.status(201).json(diet_log);
    }

    function get(req, res) {
        const query = {};

        DietLog.find(query)
        .populate('user_id')
        .exec(function (err, diet_logs) {
            if (err) {
                return res.send(err);
            }
            return res.json(diet_logs);
        });
    }

    function getDietLog(req, res) {

        DietLog.find({user_id: req.params.user_id})
        .populate('user_id')
        .exec(function (err, diet_logs) {
            if (err) {
                return res.send(err);
            }
            return res.json(diet_logs);
        });
    }

    function getLast7Days(req, res){
        var currentDate = new Date();
        var last7Days = currentDate.setDate(currentDate.getDate()-7);
        DietLog.find({user_id: req.params.user_id, timestamps: { $gte: new Date(last7Days) }})
        .populate('user_id')
        .exec(function (err, diet_logs) {
            if (err) {
                return res.send(err);
            }
            return res.json(diet_logs);
        });
    }

    function deleteDietLog(req, res) {
        req.diet_log.remove((err) => {
            if (err) {
                return res.send(err);
            }
            return res.sendStatus(204);
        });
    }

    function userAverageLast7Days(req,res){
        var currentDate = new Date();
        var last7Days = currentDate.setDate(currentDate.getDate()-7);
        DietLog.aggregate([
            {$match : {
                user_id: mongoose.Types.ObjectId(req.params.user_id), 
                timestamps: { $gte: new Date(last7Days) }
            }},
            {
                $group: {
                  _id: "$user_id",
                  avg:{
                    $avg: "$emission_score"
                  }
                }
              }
        ]).exec( function(err, result){
            if (err) {
                res.send(err);
              } else {
                res.json(result);
              }
        })
    }

    function userAllAverage(req, res){
        DietLog.aggregate([
            {$match : {user_id: mongoose.Types.ObjectId(req.params.user_id)}},
            {
                $group: {
                  _id: "$user_id",
                  avg:{
                    $avg: "$emission_score"
                  }
                }
              }
        ]).exec( function(err, result){
            if (err) {
                res.send(err);
              } else {
                res.json(result);
              }
        })
    }

    function AppPopulationAverage(req, res){

        DietLog.aggregate([
            {
                $group: {
                    _id: 1,
                  population_avg:{
                    $avg: "$emission_score"
                  }
                }
              }
        ]).exec( function(err, result){
            if (err) {
                res.send(err);
              } else {
                res.json(result);
              }
        })
    }

    return { post, get, getDietLog, deleteDietLog, getLast7Days,userAllAverage, userAverageLast7Days, AppPopulationAverage };

}

module.exports = diet_logController;