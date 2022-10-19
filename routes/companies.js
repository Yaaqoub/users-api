const express = require('express');
const router = express.Router();

const companiesController = require('../controllers/companiesController');

router.post('/companies', companiesController.creatCompany);

router.get('/companies', companiesController.listCompanies);

router.put('/companies/:companyId', companiesController.updateCompany);

router.delete('/companies/:companyId', companiesController.deleteCompany);

module.exports = router;
