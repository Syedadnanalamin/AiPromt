const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const { client, connectDB } = require('./config/db.js');
const test = require('./routes/sampleRoutes.js');

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Connect to Database 
connectDB();

// Database reference
const db = client.db("AiPromts");


// Routes
app.use('/api', test);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in development mode on port ${PORT}`);
});
