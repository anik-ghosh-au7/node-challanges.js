const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '_' + file.originalname);
    }
});

const upload = multer({storage});

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'uploads')));

app.set('views', 'src/view');
app.set('view engine', 'hbs');

let img_arr = [];

app.get('/', (req, res) => res.status(200).render('main', {img_arr}));

app.post('/upload', upload.array('image', 50), (req, res) => {
    // console.log(req.body.title);
    // console.log(req.files);
    let received_files = req.files;
    for (let i=0; i<received_files.length; i++){
        img_arr.push({"title": req.body.title, "path": received_files[i].filename})
    };
    console.log(img_arr);
    // res.send({msg : 'image / images uploaded successfully'});
    res.redirect('/');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));