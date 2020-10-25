const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const tripletSchema = new Schema({
    name: String,
    gender: String,
    sadness_points: String,
});

tripletSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
tripletSchema.set('toJSON', {
    virtuals: true
});

tripletSchema.findById = function (cb) {
    return this.model('Triplets').find({id: this.id}, cb);
};

const Triplet = mongoose.model('Triplets', tripletSchema);


exports.findByName = (name) => {
    return Triplet.find({name: name});
};

exports.createTriplet = (tripletData) => {
    const triplet = new Triplet(tripletData);
    return triplet.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Triplet.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

exports.patchTriplet = (name, tripletData) => {
    mongoose.set('useFindAndModify', false);
    return Triplet.findOneAndUpdate({
        name: name
    }, tripletData);
};

exports.removeById = (userId) => {
    return new Promise((resolve, reject) => {
        User.deleteMany({_id: userId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};
