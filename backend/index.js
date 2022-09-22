import './common/db_utils.js';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';


import routePath from './routes/routes.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());


app.use('/products',routePath)

const PORT = process.env.PORT || 4000;

app.listen(PORT,() => console.log(`Server running on port: ${PORT}`))