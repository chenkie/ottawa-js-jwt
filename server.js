'use strict';

const express = require('express');
const authentication = require('express-jwt');
const authorization = require('express-jwt-authz');
const app = express();
const cors = require('cors');

app.use(cors());

// authenticationCheck
const authenticationCheck = authentication({
  secret: 'secret'
});

// authorizationCheck
const authorizationCheck = authorization(['read:contacts']);

// public, wide-open endpoint
app.get('/api/public-route', authenticationCheck, (req, res) => {
  res.send('This is a public endpoint. You don\'t need a token to get here.');
});

// private endpoint - just need a valid token to access
app.get('/api/private-route', authenticationCheck, authenticationCheck, (req, res) => {
  res.send('This is a private endpoint. You need a token to get here.');
});

// private endpoint with tight scope - need a "read:contacts" scope
app.get('/api/contacts', (req, res) => {
  res.send('This is a private endpoint. You need a read:contacts scope to get here.');
});

const hostname = 'localhost';
const port = 3001;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});