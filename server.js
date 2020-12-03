const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const mongoose = require('mongoose');
const apiRoute = require('./routes/user')
const app = express();

require('dotenv').config();

app.use(logger('dev'));

app.use(express.json());
app.use('/api', apiRoute)

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })


// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const port = process.env.PORT || 3001;

  app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });