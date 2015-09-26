/// <reference path='../typings/express.d.ts' />
/// <reference path='../typings/winston.d.ts' />

class ErrorResolver {

    public onPageNotFound(request: Express.Request, response: Express.Response) {
        var viewFilePath = '404';
        var statusCode = 404;

        var result = {
            status: statusCode
        };

        response.status(result.status);

        response.render(viewFilePath, function (err) {
            if (err) { return response.status(statusCode).json(result); }

            response.render(viewFilePath);
        });
    }

}

var errorResolver = new ErrorResolver();

export = errorResolver;