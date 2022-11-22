const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '3000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render(
    'index', 
    { 
      title: 'Coming Soon!', 
      mainText: 'Purrr.social', 
      subText: `If you're interested in contributing, drop your mail down below<br>brought to you by busy pets`
    }
    );
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});