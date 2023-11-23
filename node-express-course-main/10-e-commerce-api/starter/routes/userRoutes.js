const express = require('express');
const router = express.Router();
const {authenticateUser} = require('../middleware/authentication')

const  {  getAllUsers,
    getSingleUser, 
    showCurrentUser, 
    updateUser, 
    updateUserPassword
} = require('../controllers/userController');
const { update } = require('lodash');

router.route('/').get(authenticateUser, getAllUsers);

router.route('/showMe').get(showCurrentUser)
router.route('/updateUser').patch(updateUser)
router.route('/updateUserPassword').patch(updateUserPassword);

router.route('/:id').get(authenticateUser, getSingleUser);

module.exports = router;
