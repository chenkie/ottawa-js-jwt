'use strict';

const express = require('express');
const jwt = require('express-jwt');
const authorization = require('express-jwt-authz');
const app = express();
const cors = require('cors');

app.use(cors());

const authCheck = jwt({
  secret: 'secret'
});

// public, wide-open endpoint
app.get('/api/public-route', (req, res) => {
  res.send('This is a public endpoint. You don\'t need a token to get here.');
});

// private endpoint - just need a valid token to access
app.get('/api/private-route', authCheck, (req, res) => {
  res.send('This is a private endpoint. You need a token to get here.');
});

// private endpoint with tight scope - need a "read:contacts" scope
app.get('/api/contacts', authCheck, authorization(['read:contacts']), (req, res) => {
  res.send('This is a private endpoint. You need a read:contacts scope to get here.');
});

const hostname = 'localhost';
const port = 3001;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});