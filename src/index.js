
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(errorHandler);
connectDB();



const PORT = process.env.PORT || 800;

app.listen(PORT, () => {
    console.log(`🚀 Server is runing on a port localhost:${PORT}`);
    
});


