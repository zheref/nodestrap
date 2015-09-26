/// <reference path='./typings/express.d.ts' />
/// <reference path='./typings/winston.d.ts' />
/// <reference path='./IApp.d.ts' />
/// <reference path='./models/Models.d.ts' />
/// <reference path='./config/environment/IAppConfiguration.d.ts' />

import express = require('express');
import winston = require('winston');

const CURRENT_ENVIRONMENT = process.env.NODE_ENV || 'development';
process.env.NODE_ENV = CURRENT_ENVIRONMENT;
console.log("Starting to run app in " + CURRENT_ENVIRONMENT + " mode");

class Api {

    private static app: any;
    private static config: IAppConfiguration;

    public static main() {
        Api.config = require('./config/environment');

        Api.app = express();

        Api.doConfig(() => {
            Api.startListening();
        });
    }

    private static doConfig(callback: () => void) {
        // General Setup
        var configExpress = require('./config');
        configExpress(Api.app);

        // Models Setup
        var configModels = require('./models');
        configModels((modelsLocator: IModelsLocator) => {
            Api.app.Models = null;
            Api.app = <IApp> Api.app;
            Api.app.Models = modelsLocator;

            // Routes setup
            var configRoutes = require('./api');
            configRoutes(Api.app);

            callback();
        });
    }

    public static getApp(): IApp {
        return Api.app;
    }

    private static startListening() {
        Api.app.listen(Api.config.port, function() {
            console.log('API is running on port', Api.config.port);
        });
    }

}

Api.main();
var app = Api.getApp();

// Expose app
export = app;