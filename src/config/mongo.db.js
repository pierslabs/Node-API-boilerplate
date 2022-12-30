// config Mongo DB
const mongoose = require('mongoose');

module.exports.connectMongoDb = async (uri) => {
  try {
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(uri, {});
    console.log(`Database ${db.connections[0].name} connected.`);
    return db;
  } catch (error) {
    process.exit(1);
  }
};
