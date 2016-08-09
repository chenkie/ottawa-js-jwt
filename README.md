# Easy Authentication with JSON Web Tokens - OttawaJS - August 10, 2016

This is a sample app that demonstrates how to protect endpoints in an Express application with [JSON Web Tokens (JWT)](https://jwt.io/introduction). It uses the open source [express-jwt](https://github.com/auth0/express-jwt) and [express-jwt-authz](https://github.com/auth0/express-jwt-authz) packages from [Auth0](https://auth0.com/signup).

## Installation

```bash
npm install
```

## Running the App

```bash
npm start
```

The app will be served at `localhost:3001` and three endpoints will be available:

* **GET** `/api/public-route` - Wide open endpoint
* **GET** `/api/private-route` - Private endpoint requiring a JWT
* **GET** `/api/contacts` - Private endpoint with tight scope - JWT needs a scope of "read:contacts"

## Getting a JWT
To get a JWT for testing, generate one at [jwt.io](https://jwt.io) with a key of 'secret'.

## License
MIT