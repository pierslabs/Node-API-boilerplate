// config Mongo DB
const mongoose = require('mongoose');
const logger = require('npmlog');
module.exports.connectMongoDb = async (uri) => {
  try {
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Database mongo:', db.connections[0].name);
    return db;
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};
