const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const url = "mongodb+srv://"+process.env.user+":"+process.env.mongopass+"@cluster0.plphx1t.mongodb.net/?retryWrites=true&w=majority";
console.log(url)
let ress = [];
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("test_database");
    dbo.collection("country_information").find({}).toArray(function(err, result) {
        if (err) throw err;
        // console.log(result);
        ress = result;
        db.close();
    });
});

exports.hello = (req,res) => {
      res.send(ress)
}

// var findDocuments = function(db, callback) {
//     let dbo = db.db("test_database");
//     var collection = dbo.collection("country_information");
//     collection.find({}).limit(2).toArray(function(err, result) {
//         console.log(result);
//       callback(result);
//     });
//   }
  
  
//   MongoClient.connect(url, function(err, db) {
//     findDocuments(db, function(result) {
//         console.log(result);
//         exports.getres = function() {
//         console.log(result);
//         return(result);
//       }
//       db.close();
//     });
//   });


