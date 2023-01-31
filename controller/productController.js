const { product } = require("../models/Product");

const productController = {
    getAll: (req, res) => {
        product.find({}, function (err, docs) {
            if (!err) {
                res.json(docs)
            }
            else {
                res.status(500).json(err);
            }
        }
        )
    },
    add: (req, res) => {
        let newProduct = new product({
            name: req.body.name,
            description: req.body.description,
            date: req.body.date,
        })


        newProduct.save(function (err, doc) {
            if (!err) {
                res.json(doc)
            }
            else {
                res.status(500).json(err)
            }
        })
    },
    getById: (req, res) => {
        let id = req.params.id;
        product.findById(id, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    },
    delete: (req, res) => {
        let id = req.params.id;
        product.findByIdAndDelete(id, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    },
    update: (req, res) => {
        let id = req.params.id;
        // try {
        //     const updatedPlot = await product.findByIdAndUpdate(
        //         id,
        //         req.body,
        //         { new: true }
        //     );
        //     res.json({
        //         updatedPlot
        //     });
        // } catch (e) {
        //     return res.status(422).send({
        //         error: { message: 'e', resend: true }
        //     });
        // }
        // console.log("id", id)
        let newProduct = new product({
                _id:id,
                name: req.body.name,
                description: req.body?.description,
                date: Date.now(),
        })
        // console.log("new",newProduct)
        product.findByIdAndUpdate(id, newProduct,{runValidators:true}, (err, doc) => {
            console.log(newProduct)
            console.log(doc)
            if (!err) {
                res.json(newProduct)
            } else {
                res.status(500).json(err);
            }
        })
    }
}

module.exports = {
    productController
}