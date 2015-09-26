/// <reference path='../typings/express.d.ts' />
/// <reference path='../typings/serve-favicon.d.ts' />
/// <reference path='../typings/morgan.d.ts' />
/// <reference path='../typings/compression.d.ts' />
/// <reference path='../typings/body-parser.d.ts' />
/// <reference path='../typings/method-override.d.ts' />
/// <reference path='../typings/cookie-parser.d.ts' />
/// <reference path='../typings/errorhandler.d.ts' />
/// <reference path='../typings/bugsnag.d.ts' />

import express = require('express');
import favicon = require('serve-favicon');
import morgan = require('morgan');
import compression = require('compression');
import bodyParser = require('body-parser');
import methodOverride = require('method-override');
import cookieParser = require('cookie-parser');
import errorHandler = require('errorhandler');
import bugsnag = require("bugsnag");
import path = require('path');

var config = require('./environment');

const VIEWS_FOLDER_PATH_FROMROOT = __dirname + "/templates";
const PUBLIC_FOLDER_ROOT_FROMROOT = express.static(__dirname + '/public');
const DEFAULT_PORT = 5000;

function doConfig(app: Express.Application) {
    app.set('port', (process.env.PORT || DEFAULT_PORT));

    app.use(PUBLIC_FOLDER_ROOT_FROMROOT);

    // views is directory for all template files
    app.set('views', VIEWS_FOLDER_PATH_FROMROOT);
    app.set('view engine', 'ejs');

    /*bugsnag.register("5c308ba0cf70f2b02d075ab741bd2433");
    app.use(bugsnag.requestHandler);*/

    var env = app.get('env');

    app.set('views', config.root + '/templates');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride('_method'));
    app.use(cookieParser());

    //app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('appPath', config.root + '/public');

    if ('production' === env) {
        app.use(morgan('dev'));
        app.use(bugsnag.errorHandler);
    }

    if ('development' === env || 'test' === env) {
        app.use(morgan('dev'));
        app.use(errorHandler());
        app.use(bugsnag.errorHandler);
    }
}

export = doConfig;