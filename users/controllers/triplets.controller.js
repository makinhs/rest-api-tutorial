const TripletModel = require('../models/triplets.model');
const crypto = require('crypto');

exports.insert = (req, res) => {
    TripletModel.createTriplet(req.body)
        .then((result) => {
            res.status(201).send({id: result.id});
        });
};

exports.list = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    TripletModel.list(limit, page)
        .then((result) => {
            res.status(200).send(result);
        })
};

exports.getByName = (req, res) => {
    TripletModel.findByName(req.params.tripletName)
        .then((result) => {
            res.status(200).send(result);
        });
};
exports.patchByName = (req, res) => {
    TripletModel.patchTriplet(req.params.tripletName, req.body)
        .then((result) => {
            res.status(204).send({});
        });
};

exports.removeById = (req, res) => {
    TripletModel.removeById(req.params.userId)
        .then((result)=>{
            res.status(204).send({});
        });
};
