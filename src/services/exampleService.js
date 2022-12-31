class ExampleService {
  static instance() {
    if (!ExampleService._instance) {
      ExampleService._instance = new ExampleService();
    }
    return ExampleService._instance;
  }

  getExamples() {
    return 'Get Examples';
  }

  getExampleId() {
    return 'Get Example by Id';
  }

  createExample() {
    return 'Create Example';
  }

  updateExample() {
    return 'Update Example';
  }

  deleteExample() {
    return 'Delete Example';
  }
}

module.exports = ExampleService;
