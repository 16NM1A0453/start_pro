const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connection string
const uri = 'mongodb+srv://niharikagunnu1999:3idiotsCurryPoint@cluster0.nuntj.mongodb.net/BasicBillingApp01?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your connection string

// MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
    .then(() => {
        console.log('Connected to MongoDB');

        // Define a root route
        // app.use(express.static(path.join(__dirname, '../client/public')));

        // app.get('*', (req, res) => {
        //     console.log('achieved');
        //     res.sendFile(path.join(__dirname, '../client/public', 'index.html')); // Adjusting the path to index.html
        // });
        

        // POST endpoint to add a bill
        app.post('/addbill', async (req, res) => {
            try {
                console.log("into addBill path")
                const database = client.db('BasicBillingApp01'); // Database name
                const collection = database.collection('BillinCollection01'); // Collection name

                // Create a bill object based on incoming request
                const bill = {
                    billNum: req.body.billNumber,
                    billDate: new Date(req.body.billDate),
                    billAmount: req.body.billAmount
                };

                const result = await collection.insertOne(bill);
                res.status(201).json({ id: result.insertedId });
            } catch (error) {
                console.error('Error inserting bill:', error.message);
                res.status(500).json({ error: 'An error occurred while inserting the bill.' });
            }
        });

        // GET endpoint to retrieve all bills
        app.get('/getBills', async (req, res) => {
            try {
                const database = client.db('BasicBillingApp01');
                const collection = database.collection('BillinCollection01');

                // Retrieve all bills
                const bills = await collection.find({}).toArray();
                res.status(200).json(bills);
            } catch (error) {
                console.error('Error retrieving bills:', error.message);
                res.status(500).json({ error: 'An error occurred while retrieving the bills.' });
            }
        });

        // Start the server
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });

    })
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Graceful shutdown
process.on('SIGINT', async () => {
    await client.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});
