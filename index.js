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
      mainText: `Purrr.social`,
      secondHeader: `How many techs do you need<br>to run Twitter?`,
      subText: `Since Elon Musk took over the platform and drained the majority of the workforce,<br>
      this question came up multiple times. let’s try this out. Send a message via Twitter, GitHub or Mail below.<br>
      <br>Currently needed:<br>
      - Frontend programming<br>
      - Backend programming`
    }
    );
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});