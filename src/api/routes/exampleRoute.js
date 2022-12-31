const express = require('express');
const router = express.Router();
const {
  getExamples,
  getExampleId,
  createExample,
  updateExample,
  deleteExample,
} = require('../controllers/exampleController');

router.get('/', getExamples);

router.post('/', createExample);

router.get('/:exampleid', getExampleId);

router.patch('/:exampleid', updateExample);

router.delete('/:exampleid', deleteExample);

module.exports = router;
