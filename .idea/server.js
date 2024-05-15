const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.config');
const categoryRoutes = require('./routes/category.routes');
const subcategoryRoutes = require('./routes/subcategory.routes');
const itemRoutes = require('./routes/item.routes');

const app = express();

// Connect to the database
connectDB();


app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.send('HARSH ANAND: Welcome to my Menu Management API ');
});

// Routes
app.use('/api', categoryRoutes);
app.use('/api', subcategoryRoutes);
app.use('/api', itemRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
