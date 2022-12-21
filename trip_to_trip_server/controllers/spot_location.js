const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const url = "mongodb+srv://"+process.env.user+":"+process.env.mongopass+"@cluster0.plphx1t.mongodb.net/?retryWrites=true&w=majority";
// console.log(url)
let spot_data = [];
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("trip_to_trip");
    dbo.collection("spot_information").find({}).toArray(function(err, result) {
        if (err) throw err;
        // console.log(result);
        spot_data = result;
        db.close();
    });
});

exports.spot = (req,res) => {
      res.send(spot_data)
}