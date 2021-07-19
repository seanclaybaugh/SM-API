const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const getTwitter = require('./controllers/twitter.js');

app.use(express.json())
app.use(express.static(path.join(__dirname, '/../dist')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter/:id', getTwitter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})