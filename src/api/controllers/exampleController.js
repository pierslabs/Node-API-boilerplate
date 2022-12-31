const { validationResult } = require('express-validator');
const ExampleService = require('../../services/exampleService');

module.exports.getExamples = (req, res) => {
  const getExamples = ExampleService.instance().getExamples();
  res.status(200).json({ data: getExamples });
};

module.exports.getExampleId = (req, res) => {
  const getExample = ExampleService.instance().getExampleId();
  res.status(200).json({ data: getExample });
};

module.exports.createExample = (req, res) => {
  //  Example validator
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }
  const example = ExampleService.instance().createExample();
  res.status(201).json({ data: example });
};

module.exports.updateExample = (req, res) => {
  const updateExample = ExampleService.instance().updateExample();
  res.status(200).json({ data: updateExample });
};

module.exports.deleteExample = (req, res) => {
  const deleteExample = ExampleService.instance().deleteExample();
  res.status(200).json({ data: deleteExample });
};
