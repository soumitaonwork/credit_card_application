const express = require('express');
const router = express.Router();
const creditCardController = require('./controller/creditcard-controller');

router.post('/add-card', creditCardController.addCreditCard);
router.get('/get-all-cards', creditCardController.getAllCreditCards);


module.exports = router;