const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.mf3nl9y.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db("brandDB");
        const samsungCollection = database.collection("samsung");

        // Samsung Endpoints CRUP operation
        // create
        app.post('/samsung', async (req, res) => {
            const doc = req.body;
            const result = await samsungCollection.insertOne(doc);
            res.send(result);
        })

        // read 
        app.get('/samsung', async (req, res) => {
            const cursor = samsungCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


// Root server
app.get('/', (req, res) => {
    res.send('Brand Shop server running!')
})

app.listen(port, () => {
    console.log(`Brand shop app listening on port ${port}`)
})