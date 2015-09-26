/// <reference path='../typings/express.d.ts' />
/// <reference path='../typings/moment-node.d.ts' />
/// <reference path='../typings/mongoose.d.ts' />
/// <reference path='../IApp.d.ts' />
/// <reference path='../models/IUser.d.ts' />
/// <reference path='./IJsonResponse.d.ts' />

import express = require('express');
import moment = require('moment');
import mongoose = require('mongoose');

var ObjectId = mongoose.Types.ObjectId;

var freeTrialPlan = require('../values/FreeTrialPlan');

var app = <IApp> require('../index');
var User = app.Models.User;

class UsersRouter {

    private _nodeRouter: Express.Router;

    constructor() {
        this._nodeRouter = express.Router();
        this.configRoutes();
    }

    public getNodeRouter(): Express.Router {
        return this._nodeRouter;
    }

    private configRoutes() {
        this._nodeRouter.get('/', this.index);
        this._nodeRouter.post('/', this.create);
    }

    private static generateFreeTrialSubscription(): ISubscription {
        var now = moment().toDate();
        var then = moment().add(15, 'days').toDate();

        return {
            planId: freeTrialPlan._id,

            activation: now,
            expiration: then,

            paid: 0.0,
            cardId: "NOTPAID",

            currency: "NOTPAID",

            discount: 1.0,

            userslimit: 1
        };
    }

    public index(request: Express.Request, response: Express.Response) {

    }

    public create(request: Express.Request, response: Express.Response) {
        var params: IUser = <IUser> request.body;

        console.log(params);

        var freeTrialSubscription = UsersRouter.generateFreeTrialSubscription();

        var user = new User({
            username: params.username,
            password: params.password,
            email: params.email,

            name: params.name,
            firstname: params.firstname,
            lastname: params.lastname,

            gender: params.gender,
            //birthday: params.birthday

            subscriptions: [freeTrialSubscription]
        });

        user.save((err: Error, usr: IUser) => {

            if (err != null) {
                var json: IJsonResponse = {
                    code: 3,
                    message: err.message,
                    feedback: err.name
                };

                response.status(500);

                response.json(json);
            } else {
                var json: IJsonResponse = {
                    code: 1,
                    message: "User registered successfully",
                    feedback: usr._id.toString()
                };

                response.status(200);

                response.json(json);
            }

        });

    }

}

var router: Express.Router = new UsersRouter().getNodeRouter();

export = router;