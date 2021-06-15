const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

router.get('/import', userController.inputUser)
router.get('/show', userController.showUser)
router.get('/delete', userController.deleteUser)

module.exports = router