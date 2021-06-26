//npm install express
//npm i nodemon
//npm run dev
//npm i morgan
//npm i dotevn --> for connecting to MongoDB
//npm i mongoose
//npm i body-parser para fazer parse do que se recebe no post
//npm i express-validator *for validating input data

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//bring in routes
const postRoutes = require('./routes/post');

// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
/*local DB
MONGO_URI = mongodb://localhost/nodeapi
*/

//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true,
    useUnifiedTopology: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

const myMiddleware = (req, resp, next) => {
    console.log("Middleware applied");
    next();
    /*Need to write next() so the app doesn't stop on
    the middleware*/
}

//middleware
app.use(morgan('dev'));
app.use(myMiddleware)
app.use(bodyParser.json());
app.use(expressValidator());

app.use("/", postRoutes);

const port = 8888;

app.listen(port, () => {
    console.log(`A NodeJS API is listening on port: ${port}`);
});