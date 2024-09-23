require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const app = express();
app.use(cors());
app.use(express.json());


(async () => {
    const PORT = process.env.PORT || 3000;

    console.log(process.env.PORT);

    try {
        await db.authenticate()
        await db.sync()
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
})()
