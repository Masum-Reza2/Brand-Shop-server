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

        // read many
        app.get('/samsung', async (req, res) => {
            const cursor = samsungCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // update
        // read single
        app.get('/singleSamsung/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await samsungCollection.findOne(query);
            res.send(result);
        })
        // update
        app.put('/singleSamsung/:id', async (req, res) => {
            const id = req.params.id;
            const tobeUpdate = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    image: tobeUpdate.newImage,
                    name: tobeUpdate.newName,
                    brandName: tobeUpdate.newBrandName,
                    type: tobeUpdate.newType,
                    price: tobeUpdate.newPrice,
                    shortDesc: tobeUpdate.newShortDesc,
                    rating: tobeUpdate.newRating
                },
            };
            const result = await samsungCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        // Sony Endpoints CRUP operation
        const sonyCollection = database.collection("sony");
        // create
        app.post('/sony', async (req, res) => {
            const doc = req.body;
            const result = await sonyCollection.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/sony', async (req, res) => {
            const cursor = sonyCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // update
        // read single
        app.get('/singleSony/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await sonyCollection.findOne(query);
            res.send(result);
        })

        // update
        app.put('/singleSony/:id', async (req, res) => {
            const id = req.params.id;
            const tobeUpdate = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    image: tobeUpdate.newImage,
                    name: tobeUpdate.newName,
                    brandName: tobeUpdate.newBrandName,
                    type: tobeUpdate.newType,
                    price: tobeUpdate.newPrice,
                    shortDesc: tobeUpdate.newShortDesc,
                    rating: tobeUpdate.newRating
                },
            };
            const result = await sonyCollection.updateOne(filter, updateDoc, options);
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