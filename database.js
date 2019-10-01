const mongoose = require("mongoose")

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


var User = new mongoose.Schema({
    _id: String,
    color: String
})
const Users = mongoose.model('Users', User)
exports.Users = Users