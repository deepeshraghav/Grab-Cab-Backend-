
const path = require("path");
require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });

console.log("✅ DB_CONNECT from .env:", process.env.DB_CONNECT);


 // auto-loads .env from same folder

const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');

// 🔍 Debug line
console.log("Loaded DB_CONNECT:", process.env.DB_CONNECT);

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Routes
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

module.exports = app;
