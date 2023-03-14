const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 8081;

// app.get('/home', (req, res) => {
//   res.send('get request');
// });

// app.post('/home', (req, res) => {
//   res.send('post request');
// });

// app.delete('/home', (req, res) => {
//   res.send('delete request');
// });

// app.use((req, res) => {
//   res.send('middleware request');
// });

// app.use((req, res) => {
//   res.redirect('https://google.com');
// });

// app.use((req, res) => {
//   res.status(500).json({ javascript: 'object' });
// });

app.use(express.json()); //express middleware
app.use(express.urlencoded({ extended: true })); // for html forms
app.use(express.static('public')); // do the directory public
app.use(morgan('tiny')); // morgan middleware (for logs)

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.originalUrl}, ${new Date().toISOString()}`);
//   next();
// });

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
