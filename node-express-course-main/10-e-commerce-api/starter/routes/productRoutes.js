const express = require('express')
const router = express.Router()
const {authenticateUser, authorizePermissions } = require('../middleware/authentication')

const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage,
} = require('../Controllers/productControllers')

router
.route('/')
.post([authenticateUser, authorizePermissions('admin')], createProduct)
.get(getAllProducts);

router.route('/uploadImage')
.post([authenticateUser, authorizePermissions('admin')], uploadImage)

router.route('/:id')
.get(getSingleProduct)
.patch([authenticateUser, authorizePermissions('admin')], updateProduct)
.delete([authenticateUser, authorizePermissions('admin')], deleteProduct);

module.exports = router;