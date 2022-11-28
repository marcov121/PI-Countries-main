const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require('./Country.js');
const activitiesRouter = require('./Activity.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', countriesRouter);
router.use('/', activitiesRouter);

module.exports = router;
