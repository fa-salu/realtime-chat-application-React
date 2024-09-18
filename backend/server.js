const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors');


dotenv.config();

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

connectDB()


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
});