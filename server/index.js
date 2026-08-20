const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const { client, connectDB } = require('./config/db.js');
const allpromtsRoutes = require('./routes/allpromtsRoutes.js');
// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Connect to Database 
connectDB();

// Routes


app.use("/api/allpromts", allpromtsRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in development mode on port ${PORT}`);
});


