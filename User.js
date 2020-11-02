const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var userDestination = new Schema(
{
    name:String,
    id:String,
    busType:String,
    destination:
    {
        from:String,
        to: String,
        date:Date,
      
     }
    

});
module.exports = mongoose.model('UserDestination', userDestination);