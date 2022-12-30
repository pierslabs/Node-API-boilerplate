require('dotenv').config({});
const http = require('http');

const server = http.createServer();
const PORT = process.env.PORT;

server.listen(PORT);

server.on('listening', () => {
  console.log(`Server run at port: ${PORT}`);
});
