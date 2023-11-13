const Product = require('../models/Product')
const {StatusCodes} = require('http-status-codes')


const createProduct = async(req,res) => {
    console.log(req.body)
    const products = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({products})
};
const getAllProducts = async(req,res) => {
    const products = await Product.find({})
    res.status(StatusCodes.OK).json({products})
};

module.exports = {
    createProduct,
    getAllProducts,
}