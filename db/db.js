const mongoose = require('mongoose');

function connectToDb() {
    if (!process.env.DB_CONNECT) {
        console.error("❌ DB_CONNECT not found in .env");
        return;
    }

    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log('✅ Connected to DB');
        })
        .catch(err => console.error("❌ DB connection error:", err));
}

module.exports = connectToDb;
