const express = require('express');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
const fs = require("fs-extra");
const multer = require("multer");
const path = require('path');
app.use(express.static(path.join(__dirname, '/')));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
const username = process.env.user;
const pass = process.env.mongopass;
const url = "mongodb+srv://"+username+":"+pass+"@cluster0.plphx1t.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})


const home = require('./routers/home')
app.use('/home',home)



/// this section is for post as post does not working in routing methods
const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads/');
    },
    filename:(req,file,cb)=>{
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
                                .replace(fileExt,"")
                                .toLowerCase()
                                .split(" ")
                                .join("-") + '-' + Date.now();
        if(fileExt == '.jpeg' || fileExt == '.png' || fileExt == ".jpg" ){
            cb(null,fileName+fileExt);
        }else{
            cb(null,fileName+'.jpg');
        }
        
    }
})
const upload = multer({
    storage:Storage, //this is the actual destination of file in local storage
    fileFilter:(req,file,cb)=>{
        // console.log(file);
        if(
            file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'
        ){
            cb(null,true);
        }else{
            cb(new Error('only .png, .jpg, .jpeg formet allowed!'))
        }
    }
});


/// this is post method for all the pages.

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("trip_to_trip");
    // var myobj = { C_name: "Canada", level: "Maple leaf", quote:" A Mari Usque Ad Mare(From sea to sea)" };
    // this is only for adding country
    app.post('/addcountry',upload.single("file"), (req, ress) => {
            const country_info = req.body;
            const country_img = req.file;
            console.log(country_img);
            if (typeof country_img == 'undefined') {
                var finalImg = {}
              }
            else{
                const newImg = fs.readFileSync('./uploads/'+country_img.filename);
                const encImg = newImg.toString('base64');
                var finalImg={
                 name:country_img.filename,
                 contentType: country_img.mimetype,
                 size: country_img.size,
                 image: Buffer(encImg,"base64")
                };
            }
                var myobj = {
                    c_name: country_info.name,
                    level: country_info.level,
                    quote: country_info.quote,
                    imageinfo:finalImg
                 };
            console.log(myobj);
            dbo.collection("country_information").insertOne(myobj, function(err, res) {
            if (err) throw err;
            // db.close();
            db.on('close', function () {
                console.log('Error...close');
              });
            console.log("1 document inserted");
            if (typeof country_img != 'undefined') {
                    fs.unlink('./uploads/'+country_img.filename,function(err){
                    if(err) return console.log(err);
                    console.log('file deleted successfully');
                }); 
              }
            ress.sendFile(__dirname+'/index.html');
        })
    })
    
});


// this is for user database
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("trip_to_trip");
    app.post('/adduser',upload.single("file"), (req, ress) => {
        const user_info = req.body;
        const user_img = req.file;
        console.log(user_img);
        if (typeof user_img == 'undefined') {
            var finalImg = {}
        }
        else{
            const newImg = fs.readFileSync('./uploads/'+user_img.filename);
            const encImg = newImg.toString('base64');
            var finalImg={
            name:user_img.filename,
            contentType: user_img.mimetype,
            size: user_img.size,
            image: Buffer(encImg,"base64")
            };
        }
            var myobj = {
                username: user_info.username,
                email: user_info.email,
                fname: user_info.fname,
                lname: user_info.lname,
                address: user_info.address,
                city: user_info.city,
                state: user_info.state,
                status: user_info.status,
                imageinfo:finalImg
            };
        console.log(myobj);
        dbo.collection("userdata").insertOne(myobj, function(err, res) {
        if (err) throw err;
        // db.close();
        db.on('close', function () {
            console.log('Error...close');
          });
        console.log("1 document inserted");
        if (typeof user_img != 'undefined') {
                fs.unlink('./uploads/'+user_img.filename,function(err){
                if(err) return console.log(err);
                console.log('file deleted successfully');
            }); 
        }
        ress.sendFile(__dirname+'/index.html');
    })
    })
    
});

// this is for location database
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("trip_to_trip");
    app.post('/addlocation',upload.single("file"), (req, ress) => {
        const loc_info = req.body;
        const loc_Img = req.file;
        console.log(loc_Img);
        if (typeof loc_Img == 'undefined') {
            var finalImg = {}
        }
        else{
            const newImg = fs.readFileSync('./uploads/'+loc_Img.filename);
            const encImg = newImg.toString('base64');
            var finalImg={
            name:loc_Img.filename,
            contentType: loc_Img.mimetype,
            size: loc_Img.size,
            image: Buffer(encImg,"base64")
            };
        }
            var myobj = {
                location: loc_info.loc_name,
                country: loc_info.c_name,
                spot: loc_info.t_spot,
                advanture: loc_info.advanture,
                imageinfo:finalImg
            };
        console.log(myobj);
        dbo.collection("location_information").insertOne(myobj, function(err, res) {
        if (err) throw err;
        // db.close();
        db.on('close', function () {
            console.log('Error...close');
          });
        console.log("1 document inserted");
        if (typeof loc_Img != 'undefined') {
                fs.unlink('./uploads/'+loc_Img.filename,function(err){
                if(err) return console.log(err);
                console.log('file deleted successfully');
            }); 
        }
        ress.sendFile(__dirname+'/index.html');
    })
    })
    
});

// this is for spot database
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("trip_to_trip");
    app.post('/addspot',upload.single("file"), (req, ress) => {
        const spot_info = req.body;
        const spot_img = req.file;
        console.log(spot_img);
        if (typeof spot_img == 'undefined') {
            var finalImg = {}
        }
        else{
            const newImg = fs.readFileSync('./uploads/'+spot_img.filename);
            const encImg = newImg.toString('base64');
            var finalImg={
            name:spot_img.filename,
            contentType: spot_img.mimetype,
            size: spot_img.size,
            image: Buffer(encImg,"base64")
            };
        }
            var myobj = {
                location: spot_info.loc_name,
                country: spot_info.c_name,
                spot: spot_info.spot_name,
                imageinfo:finalImg
            };
        console.log(myobj);
        dbo.collection("spot_information").insertOne(myobj, function(err, res) {
        if (err) throw err;
        // db.close();
        db.on('close', function () {
            console.log('Error...close');
          });
        console.log("1 document inserted");
        if (typeof spot_img != 'undefined') {
                fs.unlink('./uploads/'+spot_img.filename,function(err){
                if(err) return console.log(err);
                console.log('file deleted successfully');
            }); 
        }
        ress.sendFile(__dirname+'/index.html');
    })
    })
    
});

// adding post info in database
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("trip_to_trip");
    app.post('/addpost',upload.single("file"), (req, ress) => {
        const post_info = req.body;
        const post_img = req.file;
        console.log(post_img);
        if (typeof post_img == 'undefined') {
            var finalImg = {}
        }
        else{
            const newImg = fs.readFileSync('./uploads/'+post_img.filename);
            const encImg = newImg.toString('base64');
            var finalImg={
            name:post_img.filename,
            contentType: post_img.mimetype,
            size: post_img.size,
            image: Buffer(encImg,"base64")
            };
        }
            var myobj = {
                heading: post_info.heading,
                email: post_info.email,
                description: post_info.description,
                imageinfo:finalImg
            };
        console.log(myobj);
        dbo.collection("post_user").insertOne(myobj, function(err, res) {
        if (err) throw err;
        // db.close();
        db.on('close', function () {
            console.log('Error...close');
          });
        console.log("1 document inserted");
        if (typeof post_img != 'undefined') {
                fs.unlink('./uploads/'+post_img.filename,function(err){
                if(err) return console.log(err);
                console.log('file deleted successfully');
            }); 
        }
        ress.sendFile(__dirname+'/index.html');
    })
    })
    
});


// adding hotel info in database
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("trip_to_trip");
    app.post('/addhotel',upload.single("file"), (req, ress) => {
        const hotel_info = req.body;
        const hotel_img = req.file;
        console.log(hotel_img);
        if (typeof hotel_img == 'undefined') {
            var finalImg = {}
        }
        else{
            const newImg = fs.readFileSync('./uploads/'+hotel_img.filename);
            const encImg = newImg.toString('base64');
            var finalImg={
            name:hotel_img.filename,
            contentType: hotel_img.mimetype,
            size: hotel_img.size,
            image: Buffer(encImg,"base64")
            };
        }
            var myobj = {
                heading: hotel_info.hotel,
                location: hotel_info.location,
                review: hotel_info.review,
                imageinfo:finalImg
            };
        console.log(myobj);
        dbo.collection("hotel_information").insertOne(myobj, function(err, res) {
        if (err) throw err;
        // db.close();
        db.on('close', function () {
            console.log('Error...close');
          });
        console.log("1 document inserted");
        if (typeof hotel_img != 'undefined') {
                fs.unlink('./uploads/'+hotel_img.filename,function(err){
                if(err) return console.log(err);
                console.log('file deleted successfully');
            }); 
        }
        ress.sendFile(__dirname+'/index.html');
    })
    })
    
});


// adding flight info in database
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("trip_to_trip");
    app.post('/addflight',upload.single("file"), (req, ress) => {
        const flight_info = req.body;
        const flight_img = req.file;
        console.log(flight_img);
        if (typeof flight_img == 'undefined') {
            var finalImg = {}
        }
        else{
            const newImg = fs.readFileSync('./uploads/'+flight_img.filename);
            const encImg = newImg.toString('base64');
            var finalImg={
            name:flight_img.filename,
            contentType: flight_img.mimetype,
            size: flight_img.size,
            image: Buffer(encImg,"base64")
            };
        }
            var myobj = {
                flight: flight_info.flight,
                flightCode: flight_info.flightCode,
                startDestination: flight_info.start_destination,
                endDestination: flight_info.end_destination
            };
        console.log(myobj);
        dbo.collection("flight_information").insertOne(myobj, function(err, res) {
        if (err) throw err;
        // db.close();
        db.on('close', function () {
            console.log('Error...close');
          });
        console.log("1 document inserted");
        if (typeof flight_img != 'undefined') {
                fs.unlink('./uploads/'+flight_img.filename,function(err){
                if(err) return console.log(err);
                console.log('file deleted successfully');
            }); 
        }
        ress.sendFile(__dirname+'/index.html');
    })
    })
    
});
//posting data from react and fecthing here:
app.post('/booking/postData',(req, ress) => {
    const bookingData = req.body;
    console.log(bookingData);
});


app.listen(5000);