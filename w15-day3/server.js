const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());

// items array
let arr = [
    {
       "userId": 1,
       "id": 1,
       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
       "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
     },
     {
       "userId": 1,
       "id": 2,
       "title": "qui est esse",
       "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
     },
     {
       "userId": 1,
       "id": 3,
       "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
       "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
     },
     {
       "userId": 1,
       "id": 4,
       "title": "eum et est occaecati",
       "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
     },
     {
       "userId": 1,
       "id": 5,
       "title": "nesciunt quas odio",
       "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
     },
     {
       "userId": 1,
       "id": 6,
       "title": "dolorem eum magni eos aperiam quia",
       "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
     },
     {
       "userId": 1,
       "id": 7,
       "title": "magnam facilis autem",
       "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
     },
     {
       "userId": 1,
       "id": 8,
       "title": "dolorem dolore est ipsam",
       "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
     },
     {
       "userId": 1,
       "id": 9,
       "title": "nesciunt iure omnis dolorem tempora et accusantium",
       "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
     },
];

app.set('views', 'views');

// app.set('view engine', 'pug');

// app.set('view engine', 'ejs');

app.set('view engine', 'hbs');

// to get all the items
app.get('/', (req, res) => {
    res.status(200).render('items', {arr});
});

// to get a single item
app.get('/:id', (req, res) => {
    const found = arr.some(arr_item => arr_item.id === parseInt(req.params.id));
    if(found){
        arr_item = arr.find(arr_item => arr_item.id === parseInt(req.params.id));
        res.status(200).render('item', {arr_item});
    } else {
        res.status(404).send({msg :`No item with id : ${req.params.id}`});
    }
});

// to add an item
app.post('/', (req, res) => {
    const new_item = {
        "id": arr.length + 1,
        "userId": req.body.userId,
        "title": req.body.title,
        "body": req.body.body
    };
    if(!new_item.userId || !new_item.title || !new_item.body){
        res.status(400).json({msg: "Please include only userId, title & body"});
    } else {
        arr.push(new_item);
        res.status(200).json(`New item with id ${new_item.id} was added successfully`);
    };
});

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));