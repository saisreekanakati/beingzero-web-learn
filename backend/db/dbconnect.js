const mongoose=require('mongoose');

module.exports.connect=function(){
    var password = process.env.Mongo_atlas_password;
    var connectionString = "mongodb+srv://saisreekanakati:"+password+"@cluster0.3mite.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString, {});
mongoose.connection.on('connected', function(){
    console.log("Database connected");

});
}