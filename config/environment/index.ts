/// <reference path='../../typings/node.d.ts' />
/// <reference path='../../typings/lodash.d.ts' />
/// <reference path='./IAppConfiguration.d.ts' />

import path = require('path');
import _ = require('lodash');

function requiredProcessEnv(name) {

    if (!process.env[name]) {
        throw new Error('You must set the ' + name + ' environment variable');
    }

    return process.env[name];

}

requiredProcessEnv('NODE_ENV');

var all: IAppConfiguration = {

    env: process.env.NODE_ENV,

    root: path.normalize(__dirname + '/../..'),

    port: process.env.PORT || 80,

    seedDB: false,

    secrets: {
        session: 'the_secret'
    },

    userRoles: ['guest', 'user', 'admin'],

    mongo: {
        options: {
            db: {
                safe: true
            }
        }
    },

    stripe: {
        secret_key: "PUT_CODE_HERE",
        pubishable_key: "PUT_CODE_HERE"
    }

};

var finalConfig = _.merge(all, require('./' + process.env.NODE_ENV + '.js') || {});

export = finalConfig;