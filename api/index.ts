/// <reference path='../typings/express.d.ts' />
/// <reference path='../typings/winston.d.ts' />

var errors = require('./errors');

function configApi(app: Express.Application) {

    // Insert routes below
    app.use('/api/users', require('./users.router'));

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
       .get(errors.onPageNotFound);

    // All other routes should redirect to the index.html
    app.route('/*')
       .get((request: Express.Request, response: Express.Response) => {
            response.sendfile(app.get('appPath') + '/index.html');
       });
}

export = configApi;