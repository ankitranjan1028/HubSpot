const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Get contacts with project roles
router.get('/', contactController.getContacts);

module.exports = router;