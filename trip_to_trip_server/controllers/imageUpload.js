const express = require('express');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
const fs = require("fs-extra");
const multer = require("multer");
const path = require('path');


const username = process.env.user;
const pass = process.env.mongopass;
const url = "mongodb+srv://"+username+":"+pass+"@cluster0.plphx1t.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

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


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test_database");
    // var myobj = { C_name: "Canada", level: "Maple leaf", quote:" A Mari Usque Ad Mare(From sea to sea)" };
    app.post('/addcountry',upload.single("file"), (req, ress) => {
            const country_info = req.body;
            const Imgfile = req.file;
            // console.log(Imgfile);
            const newImg = fs.readFileSync('./uploads/'+Imgfile.filename);
            const encImg = newImg.toString('base64');
            var finalImg={
                 name:Imgfile.filename,
                 contentType: Imgfile.mimetype,
                 size: Imgfile.size,
                 image: Buffer(encImg,"base64")
                };
                var myobj = {
                    c_name: country_info.name,
                    level: country_info.level,
                    quote: country_info.quote,
                    imageinfo:finalImg
                 };
            // console.log(myobj);
            dbo.collection("country_information").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
            fs.unlink('./uploads/'+Imgfile.filename,function(err){
                if(err) return console.log(err);
                // console.log('file deleted successfully');
           }); 
            ress.redirect(200,'/');
        })
    })
    
  });
