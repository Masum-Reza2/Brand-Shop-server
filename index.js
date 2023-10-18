const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());



// Root server
app.get('/', (req, res) => {
    res.send('Brand Shop server running!')
})

app.listen(port, () => {
    console.log(`Brand shop app listening on port ${port}`)
})