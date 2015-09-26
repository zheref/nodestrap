/// <reference path='../../typings/node.d.ts' />
/// <reference path='../../typings/lodash.d.ts' />
/// <reference path='./IAppConfiguration.d.ts' />

import path = require('path');
import _ = require('lodash');

var productionConfig: IAppConfiguration = {

    port: process.env.PORT || 3000

};

export = productionConfig;