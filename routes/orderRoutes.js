const orderController = require('../controllers/orderController')
const router = require('express').Router()

//router.get('/', orderController.example)
router.post('/', orderController.addOrder)

module.exports = router
