var express = require('express');
var router = express.Router();

let users = [{
  Username: "Anik Ghosh", 
  Email: "anik@gmail.com", 
  Password: "12345678"
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

/* GET individual user. */
router.get('/:name', function(req, res, next) {
  let name = req.params.name;
  let found = users.find(elem => elem.Username === name);
  if (found) {
    res.status(200).send(found);
  } else {
    res.status(404).send({msg: 'No user with this Username!!!'});
  };
});

/* POST individual user. */
router.post('/adduser/:name/:email/:password', function(req, res, next) {
  let name = req.params.name;
  let email = req.params.email;
  let password = req.params.password;

  users.push({
    Username: name, 
    Email: email, 
    Password: password
  });

  res.status(200).send({msg: 'User successfully added!!!'});
  
});

/* UPDATE individual user details. */
router.put('/updateemail/:name/:email/:password', function(req, res, next) {
  let name = req.params.name;
  let password = req.params.password;
  let email = req.params.email;

  let found =  users.find(user => user.Username === name && user.Password === password);

  if (found) {
    users.forEach(user => {
      if (user === found) {
        user.Email = email;
      };
    });
    res.status(200).send({msg: `User details updated successfully`});
  } else {
    res.status(404).send({msg: 'Invalid credentials!!!'});
  };

});

router.put('/updateusername/:name/:email/:password', function(req, res, next) {
  let name = req.params.name;
  let password = req.params.password;
  let email = req.params.email;

  let found =  users.find(user => user.Email === email && user.Password === password);

  if (found) {
    users.forEach(user => {
      if (user === found) {
        user.Username = name;
      };
    });
    res.status(200).send({msg: `User details updated successfully`});
  } else {
    res.status(404).send({msg: 'Invalid credentials!!!'});
  };

});

router.put('/updatepassword/:name/:email/:password', function(req, res, next) {
  let name = req.params.name;
  let password = req.params.password;
  let email = req.params.email;

  let found =  users.find(user => user.Username === name && user.Email === email);

  if (found) {
    users.forEach(user => {
      if (user === found) {
        user.Password = password;
      };
    });
    res.status(200).send({msg: `User details updated successfully`});
  } else {
    res.status(404).send({msg: 'Invalid credentials!!!'});
  };

});

/* DELETE individual user. */
router.delete('/deluser/:name/:password', function(req, res, next) {
  let name = req.params.name;
  let password = req.params.password;

  let found =  users.find(user => user.Username === name && user.Password === password);

  if (found) {
    users = users.filter(user => user !== found);
    res.status(200).send({msg: `${name} - user deleted successfully`});
  } else {
    res.status(404).send({msg: 'Invalid credentials!!!'});
  };

});

module.exports = router;
