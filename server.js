const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(_, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(
  PORT,
  error =>
    error
      ? console.error(error)
      : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
);
