/// <reference path='../typings/mongoose.d.ts' />

import mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlanOptions = {
    collection: 'plans'
};

//noinspection ReservedWordAsName
var PlanSchema = new Schema({

    id: String,

    name: String,

    monthprice: Number,
    annualprice: Number,

    currency: String,

    discount: Number,

    userslimits: Number,

    period: String,
    activation: {
        type: Date,
        default: Date.now
    },
    expiration: Date,

    enabled: Boolean,

    description: String,
    benefits: String,

    terms: String,

    ads: Boolean,

    feature1: Boolean,
    feature2: Boolean,
    feature3: Boolean,
    feature4: Boolean

}, PlanOptions);

var PlanDefinition = {

    NAME: 'Plan',
    Schema: PlanSchema,
    Model: null,
    options: PlanOptions

};

export = PlanDefinition;