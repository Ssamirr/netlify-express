const express = require('express');
const { default: mongoose } = require('mongoose');
const productRouter = require('../routes/productRoutes');
const serverless = require("serverless-http");
const PORT = process.env.PORT || 8088;
var cors = require("cors");


const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb+srv://Samir:1QiJIJLUyr52lVdw@cluster0.klz9ll1.mongodb.net/myDb")
    .then(res => {
        console.log('Connect!');
    })
    .catch(err => {
        console.log('err', err);
    })

app.use('/api/products', productRouter);

app.get('/', function (req, res) {
    res.json("Hello");
})

app.listen(PORT);

module.exports.handler = serverless(app);




