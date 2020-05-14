const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// empty members array
let members = [];

let app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

// about member app
app.get('/about', (req, res) => {
    res.send('<h1>Member App!!</h1>');
});

// to get all members
app.get('/', (req, res) => {
    res.json(members);
});

// to get a single member with a particular id
app.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
});

// to add new member
app.post('/', (req, res) => {
    const new_member = {
        "id": members.length + 1,
        "name": req.body.name,
        "email": req.body.email
    };
    if (!new_member.email || !new_member.name){
        res.status(400).json({msg: "Please include a anme and email"});
    } else {
        members.push(new_member);
        res.json(`New member with id ${new_member.id} added successfully`);
    };
});

// to update an exixting member
app.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found){
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({msg: 'Member updated', member});
            }
        });
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
});

// to delete an exixting member
app.delete('/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found){
        members = members.filter(member => member.id !== parseInt(req.params.id));
    res.json({
        msg: 'Member deleted',
        members: members
    });
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));