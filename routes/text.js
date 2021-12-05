const express = require('express');
const router = express.Router();
const textController = require('../controllers/textController');
// validations
const textValidations = require('../validations/text/text-validations');

router.get('/iecho/:text',
    textValidations,
    textController.checkText
);

module.exports = router;