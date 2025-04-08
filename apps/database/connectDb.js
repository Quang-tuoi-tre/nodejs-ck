require('dotenv').config();
const mongoose = require('mongoose');

const username = process.env.DB_USER;
const pass = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wbfmp6x.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri);

        console.log(`MongoDB Connected`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); // Thoát chương trình nếu kết nối thất bại
    }
};

  
module.exports = connectDB;