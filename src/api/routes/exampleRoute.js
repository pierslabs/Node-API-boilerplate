const express = require('express');
const router = express.Router();
const {
  getExamples,
  getExampleId,
  createExample,
  updateExample,
  deleteExample,
} = require('../controllers/exampleController');

// const { bodyValidator, paramValidator } = require('../middlewares/validators');

router.get('/', getExamples);

// Example Validator
router.post('/', /* bodyValidator,*/ createExample);

router.get('/:exampleid', getExampleId);

router.patch('/:exampleid', updateExample);

router.delete('/:exampleid', deleteExample);

module.exports = router;
