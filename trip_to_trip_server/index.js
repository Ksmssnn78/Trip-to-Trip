const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const { request } = require('express');
const fs = require("fs-extra");

const url = "mongodb+srv://mashraf9881:fTKkbeCXhl2I3UQi@cluster0.plphx1t.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get('/',(req,res)=>{
    // res.sendFile(__dirname+'/index.html')
    res.send("result is null");
})

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("test_database");
    dbo.collection("country_information").find({}).limit(5).toArray(function(err, result) {
        if (err) throw err;
        //console.log(result);
        app.get('/country', (req, res) => {
            res.send(result);
        })
        db.close();
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// app.post('/addcountry', (req, res) => {
//     const country_info = req.body;
//     console.log(country_info);
// 
// })
// data insert in database 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test_database");
    // var myobj = { C_name: "Canada", level: "Maple leaf", quote:" A Mari Usque Ad Mare(From sea to sea)" };
    app.post('/addcountry', (req, ress) => {
            const country_info = req.body;
            console.log(country_info);
            dbo.collection("country_information").insertOne(country_info, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
            ress.redirect(200,'/');
            })
        })
    
  });

  app.listen(5000);