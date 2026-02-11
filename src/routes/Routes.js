const express = require('express');
const controller = require('../controllers/Controller'); // Здесь описаны все контроллеры

const router = express.Router();

router.post('/getSettings', controller.getSettings);
router.post('/getStateInstance', controller.getStateInstance);
router.post('/sendMessage', controller.sendMessage);
router.post('/sendFileByUrl', controller.sendFileByUrl);

module.exports = router;