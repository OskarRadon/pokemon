const express = require('express');

const app = express();

app.use(express.static('client'));
app.use(express.static('_build'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});