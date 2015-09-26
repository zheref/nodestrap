/// <reference path='../../typings/node.d.ts' />
/// <reference path='../../typings/lodash.d.ts' />
/// <reference path='./IAppConfiguration.d.ts' />

import path = require('path');
import _ = require('lodash');

var developmentConfig: IAppConfiguration = {

    port: 8081,

    seedDB: true

};

export = developmentConfig;
