const Student = require('../model/Student');

const StudentController = {};

// add student
StudentController.add = (req, res) => {
    let student = new Student(req.body);
    student.save((err, data) => {
        if (err) {
            return res.status(400).send(err)
        } else {
            res.status(200).send({msg: 'Student added successfully!!!', data});
        };
    });
};

// get all students list
StudentController.getAll = (req, res) => {
    Student.find((err, data) => {
        if (err) {
            res.status(500).send({msg: "Internal Server Error"});
        } else {
            res.status(200).send(data);
         }; 
    });
};

// get all students list according to state
StudentController.getAllByState = (req, res) => {
    let state = req.params.state;
    Student.find({State: state}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (data.length == 0) {
                res.status(404).send({msg: 'No student found!!!'});
            } else {
            res.status(200).send(data);
            };
         }; 
    });
};

// get student details according to first & last name
StudentController.getdetails = (req, res) => {
    let firstName = req.params.firstName;
    let lastName = req.params.lastName;

    Student.find({FirstName: firstName, LastName: lastName}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (data.length == 0) {
                res.status(404).send({msg: 'No student found!!!'});
            } else {
            res.status(200).send(data);
            };
         }; 
    });
};

module.exports = {StudentController};