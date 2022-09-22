import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/task", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

import '../models/products/product_model.js';