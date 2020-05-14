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

app.get('/', (req, res) => {
    let data = {};
    if(req.query.updated){
        data.updated = true;
        data.img_arr = img_arr;
    }
    data.img_arr = img_arr;
    res.status(200).render('main', data);
});

app.post('/upload', upload.array('image', 50), (req, res) => {
    // console.log(req.body.title);
    // console.log(req.files);
    let received_files = req.files;

    // // Cloudinary configuration
    const cloudinary = require('cloudinary').v2;
    cloudinary.config({
        cloud_name: 'anik',
        api_key: '546467216427342',
        api_secret: 'OyLVH70B2ln4f40tLHBKpRWIUf4'
    })

    for (let i=0; i<received_files.length; i++){
        img_arr.push({"title": req.body.title, "path": received_files[i].filename});

        const cloud_path = received_files[i].path;
        const uniqueFilename = received_files[i].filename;

        cloudinary.uploader.upload(cloud_path, {
            public_id: `uploads/${uniqueFilename}`,
            tags: 'images'},
            function(err, image){
                if(err) return res.status(400).send(err)
                // res.json(image);
            })
    };
    // console.log(img_arr);
    // res.send({msg : 'image / images uploaded successfully'});
    res.redirect('/?updated=true');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));