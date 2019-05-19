const express = require('express');
const app = express();
const {PORT} = require('./config');
app.use(express.static('public'));
app.use('/',express.static('public/slideShow'));

let server;

function runServer(port = PORT) {

  return new Promise((resolve, reject) => {

      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
    .on('error', err => {
      mongoose.disconnect();
      reject(err);
    });

  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };