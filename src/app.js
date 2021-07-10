import express from 'express';
import path from 'path';
import { config } from 'dotenv';

config();

import mainRoute from './routes/main.routes'
const app = express();

// Settings
app.set('port', process.env.PORT || 6000);

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use(mainRoute);

// Impórting images uploadeds folder
app.use(express.static(path.join(__dirname, 'public')));

//error response
app.use(function(req, res, next) {
    res.status(404).send('404: Not Found');
});

export default app;