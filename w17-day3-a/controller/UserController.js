const User = require('../model/User');

const UserController = {};

// Create new user
UserController.create = (req, res) => {
    let user = new User(req.body);
    user.save((err, data) => {
        if (err) {res.status(400).send(err)} else {
        console.log('Document inserted');
        res.send(user);
        }    
    });
};

// Get all users
UserController.getAll = (req, res) => {
    User.find((err, data) => {
        if (err) {res.status(404).send(err)} else {
            res.send(data);
        };
    });
};

// // get user according to username
// UserController.getUser = (req, res) => {
//     let username = req.params.username;
//     User.find({Username: username}, (err, data) => {
//         if (err) {res.status(400).send(err)} else {
//             res.send(data);
//         };
//     });
// };

// get user according to username (Alternate Method)
UserController.getUser = (req, res) => {
    let username = req.params.username;
    let query = User.find();
    if (username.length > 0 && username.toLowerCase != 'none') {
        query.where({Username: username});
    };
    query.exec((err, result) => {
        if (err) {res.status(404).send(err)} else {
            if (result.length > 0) {res.status(200).send(result)} else {
                res.status(404).send({msg: 'No user with given Username!!!'});
            };
        };
    });
};


// update user details according to username
UserController.updateUser = (req, res) => {
    let username = req.params.username;
    let query = User.find();

    if (req.body.Name) query.update({Username: username}, { $set: { Name: req.body.Name } });
    if (req.body.Email) query.update({Username: username}, { $set: { Email: req.body.Email } });
    if (req.body.Password) query.update({Username: username}, { $set: { Password: req.body.Password } });
    if (req.body.Group) query.update({Username: username}, { $set: { Group: req.body.Group } });

    query.exec((err, result) => {
        if (err) {res.status(404).send(err)} else {
            if (result.nModified > 0) {
            res.status(200).send(result);
            } else {
                res.status(400).send({msg: 'Update Failed!!!'});
            };
        };
    });
};

// delete user details according to username
UserController.deleteUser = (req, res) => {
    let username = req.params.username;
    User.findOneAndDelete({Username: username})
        .then(res.status(200).send({msg: 'User deleted successfully'}))
        .catch(err => res.status(400).send('Invalid Username', err))
};

module.exports = {UserController};