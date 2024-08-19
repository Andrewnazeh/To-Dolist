
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const taskRoute = require('./routes/taskRoute')


// Connect with db
mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
        console.log(`Database Connected: ${conn.connection.host}`);
    })
    .catch((err) => {
        console.error(`Database Error: ${err}`);
        process.exit(1);
    });




// express app
const app = express();



// Middlewares
app.use(express.json({ limit: '20kb' }));

app.use("/api/v1", taskRoute);


app.all('*', (req, res, next) => {
    next(new Error(`Can't find this route: ${req.originalUrl}`));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App running running on port ${PORT}`);
});

