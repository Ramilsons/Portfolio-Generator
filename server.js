import express from 'express';
import router from './routes/routes.js';


const PORT = 8080;

// execute o express
const app = express();

// configure express for data coming from req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


// load my routes
app.use(router);
app.set('view engine', 'ejs');

// configure past for archives js and css(static archives)
app.use(express.static('public'));

// initialize my server
app.listen(PORT, () => { console.log('⚡ Server linstening port: ' + PORT) });