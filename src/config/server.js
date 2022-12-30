require('dotenv').config({});
const http = require('http');
const app = require('../app.js');

const server = http.createServer(app);

const PORT = process.env.PORT;
server.listen(PORT);

server.on('listening', () => {
  console.log(`Server run at port: ${PORT}`);
});
