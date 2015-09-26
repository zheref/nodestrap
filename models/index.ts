/// <reference path='./Models.d.ts' />
/// <reference path='../typings/express.d.ts' />
/// <reference path='../typings/mongoose.d.ts' />
/// <reference path='../typings/winston.d.ts' />
/// <reference path='./../config/environment/IAppConfiguration.d.ts' />
/// <reference path='../IApp.d.ts' />

/**
 * Created by zheref on 7/10/15.
 */

import mongoose = require('mongoose');
import wins = require('winston');

const MONGODB_URI: string = process.env.MONGODB_URI;

wins.debug("Going to connect to Mongo with URI: %s", MONGODB_URI);
console.log("Going to connect to Mongo with URI: " + MONGODB_URI);

mongoose.connect(MONGODB_URI);

var db = mongoose.connection;

declare module GlobalContext {
    type ModelReturner = (models: IModelsLocator) => void;
}

function constructCollectionSchemas(returner: (modelsLocator: IModelsLocator) => void) {

    db.on('error', (error: Error) => {

        console.error.bind(console, 'connection error:');
        wins.error("Mongoose connection error: %s", error.message);

    });

    db.once('open', () => {

        var ModelsLocator: IModelsLocator = {
            User: null,
            Plan: null,
            Card: null
        };

        var UserDef = require('./User');
        UserDef.Model = mongoose.model<IUser>(UserDef.NAME, UserDef.Schema);

        var PlanDef = require('./Plan');
        PlanDef.Model = mongoose.model<IPlan>(PlanDef.NAME, PlanDef.Schema);

        ModelsLocator.User = UserDef.Model;
        ModelsLocator.Plan = PlanDef.Model;

        returner(ModelsLocator);

    });

}

export = constructCollectionSchemas;