const express = require('express');
const morgan = require('morgan');
const app = express();

const { router } = require('./booksRouter');

const PORT = 8081;

app.use(express.json()); //express middleware
app.use(express.urlencoded({ extended: true })); // for html forms
app.use(express.static('public')); // do the directory public
app.use(morgan('tiny')); // morgan middleware (for logs)
app.use('/api', router);

app.post('/home', (req, res) => {
  if (!req.body.test) {
    return res.status(400).json({ status: 'test parameter is required' });
  }
  // console.log(req.body);
  res.json({ javascript: 'object', body: req.body });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error at server launch', err);
  }
  console.log(`Server work at PORT ${PORT}!`);
});
