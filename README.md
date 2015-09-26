# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

###Configuring WebStorm###
- Command line options: --module commonjs -t es6 --removeComments
- Use output path: /ABSOLUTE/PATH/TO/PROJECT/dist/$FileDirRelativeToProjectRoot$

MessiIsAwesome2015

mongodb://username:password@hostname:port/database-name

MONGODB_URI=mongodb://username:password@hostname:port/database-name node ./build/index.js

###Steps for creating a new endpoing###
1. Look for the right router in /api
2. Add new method with a request and a response as parameters and a suitable name
3. Add a new line to the method `configRouter` of the router as this:
    `this._nodeRouter.get('/route/to/me', this.method_name);`
4. `grunt` and `node ./build/index.js` for testing.

###Steps for adding a new field to a model###
1. Locate /models directory
2. 