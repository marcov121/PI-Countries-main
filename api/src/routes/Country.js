const { Router } = require('express');
const router = Router();
const { getCountries, getCountryById, getCountryByName } = require('../controllers/countries.js');

router.get('/', getCountries);
router.get('/countries', getCountryByName);
router.get('/countries/:id', getCountryById);

module.exports = router;