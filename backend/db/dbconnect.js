var mongoose = require('mongoose');

module.exports.connect = function(){
    var p=process.env.Mongo_atlas_password;
    var connectionString = "mongodb+srv://saisreekanakati:"+p+"@cluster0.3mite.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    var dbops = {useUnifiedTopology: true,useNewUrlParser: true, useFindAndModify:true}
    mongoose.connect(connectionString,dbops);
    var db = mongoose.connection;
    db.on('connected', function() {
    console.log("Successfully connected to MongoDB!");
    });

    db.on('error',function(err){
        console.log('connect error:'+err);
    })
    db.on('disconnected',function(){
        console.log('disconnected');
    })
}
