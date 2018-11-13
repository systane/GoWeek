const User = require('../models/User');

module.exports = {
    async listAll(req, res){
        const users = await User.find({});

        return res.json(users);
    },
    async store(req, res, next) {
        
        const user = await User.create(req.body, function (err) {

            if (err) {
                return next(err);
            } else {


                req.io.emit('user', user);

                return res.json(user);
            }

        });
    }
};