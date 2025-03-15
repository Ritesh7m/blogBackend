const mongoose =require('mongoose');

require('dotenv').config();

 const connectDB = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("db connected successfuly"))
    .catch((error)=>{
        console.log("faield toh fetch");
        console.log(error);
        process.exit(1);
    })
 }

 module.exports = connectDB;

