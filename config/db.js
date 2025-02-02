const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected!");
    } catch (err) {
        console.error("DB Connection Failed!", err);
        process.exit(1);
    }
};

connectDB();
module.exports = mongoose;
