const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const url = "mongodb+srv://"+process.env.user+":"+process.env.mongopass+"@cluster0.plphx1t.mongodb.net/?retryWrites=true&w=majority";
// console.log(url)
let user_res = [];
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("trip_to_trip");
    dbo.collection("userdata").find({}).toArray(function(err, result) {
        if (err) throw err;
        // console.log(result);
        user_res = result;
        db.close();
    });
});

exports.userdata = (req,res) => {
      res.send(user_res)
}