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

        // Samsung Endpoints CRUD operation
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

        // Sony Endpoints CRUD operation
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

        // Intel Endpoints CRUD operation
        const intelCollection = database.collection("intel");
        // create
        app.post('/intel', async (req, res) => {
            const doc = req.body;
            const result = await intelCollection.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/intel', async (req, res) => {
            const cursor = intelCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // update 
        // read single
        app.get('/singleIntel/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await intelCollection.findOne(query);
            res.send(result);
        })

        // update
        app.put('/singleIntel/:id', async (req, res) => {
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
            const result = await intelCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        // Intel Endpoints CRUD operation
        const hpCollection = database.collection("hp");
        // create
        app.post('/hp', async (req, res) => {
            const doc = req.body;
            const result = await hpCollection.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/hp', async (req, res) => {
            const cursor = hpCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // update 
        // read single
        app.get('/singleHp/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await hpCollection.findOne(query);
            res.send(result);
        })

        // update
        app.put('/singleHp/:id', async (req, res) => {
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
            const result = await hpCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        // Dell Endpoints CRUD operation
        const dellCollection = database.collection("dell");
        // create
        app.post('/dell', async (req, res) => {
            const doc = req.body;
            const result = await dellCollection.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/dell', async (req, res) => {
            const cursor = dellCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // update 
        // read single
        app.get('/singleDell/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await dellCollection.findOne(query);
            res.send(result);
        })

        // update
        app.put('/singleDell/:id', async (req, res) => {
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
            const result = await dellCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        // apple Endpoints CRUD operation
        const appleCollection = database.collection("apple");
        // create
        app.post('/apple', async (req, res) => {
            const doc = req.body;
            const result = await appleCollection.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/apple', async (req, res) => {
            const cursor = appleCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // update 
        // read single
        app.get('/singleApple/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await appleCollection.findOne(query);
            res.send(result);
        })

        // update
        app.put('/singleApple/:id', async (req, res) => {
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
            const result = await appleCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })


        // MyCart Endpoints CRUD operation
        const cartCollection = database.collection("cart");
        // create
        app.post('/cart', async (req, res) => {
            const doc = req.body;
            const result = await cartCollection.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/cart', async (req, res) => {
            const cursor = cartCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // Delete 
        // read single
        app.delete('/singleCart/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await cartCollection.deleteOne(query);
            res.send(result);
        })



        // >>>>>>>>>>>>>>Slider Endpoints<<<<<<<<<<<<<<
        // samsungSlider Endpoints CRUD operation
        const samSlider = database.collection("samSlider");
        // create
        app.post('/samSlider', async (req, res) => {
            const doc = req.body;
            const result = await samSlider.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/samSlider', async (req, res) => {
            const cursor = samSlider.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // sonySlider Endpoints CRUD operation
        const sonySlider = database.collection("sonySlider");
        // create
        app.post('/sonySlider', async (req, res) => {
            const doc = req.body;
            const result = await sonySlider.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/sonySlider', async (req, res) => {
            const cursor = sonySlider.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // intelSlider Endpoints CRUD operation
        const intelSlider = database.collection("intelSlider");
        // create
        app.post('/intelSlider', async (req, res) => {
            const doc = req.body;
            const result = await intelSlider.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/intelSlider', async (req, res) => {
            const cursor = intelSlider.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // hpSlider Endpoints CRUD operation
        const hpSlider = database.collection("hpSlider");
        // create
        app.post('/hpSlider', async (req, res) => {
            const doc = req.body;
            const result = await hpSlider.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/hpSlider', async (req, res) => {
            const cursor = hpSlider.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // dellSlider Endpoints CRUD operation
        const dellSlider = database.collection("dellSlider");
        // create
        app.post('/dellSlider', async (req, res) => {
            const doc = req.body;
            const result = await dellSlider.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/dellSlider', async (req, res) => {
            const cursor = dellSlider.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // appleSlider Endpoints CRUD operation
        const appleSlider = database.collection("appleSlider");
        // create
        app.post('/appleSlider', async (req, res) => {
            const doc = req.body;
            const result = await appleSlider.insertOne(doc);
            res.send(result);
        })

        // read many
        app.get('/appleSlider', async (req, res) => {
            const cursor = appleSlider.find();
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