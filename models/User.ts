/// <reference path='../typings/mongoose.d.ts' />

import mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PROFILE_PICTURE_FILENAME_DEFAULT: string = "NP";

var UserOptions = {
    collection: 'users'
};

//noinspection ReservedWordAsName
var UserSchema = new Schema({

    id: String,

    username: String,
    password: String,
    emailVerified: Boolean,
    email: String,

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: [Date],
        default: []
    },

    name: String,
    firstname: String,
    lastname: String,

    profilePictureFilename: {
        type: String,
        default: PROFILE_PICTURE_FILENAME_DEFAULT
    },

    birthday: Date,
    gender: String,

    subscriptions: [{
        planId:         String,

        activation:     Date,
        expiration:     Date,

        paid:           Number,
        cardId:         String,

        currency:       String,

        discount:       Number,

        userslimit:     Number
    }],

    cards: [String]

}, UserOptions);

var UserDefinition = {

    NAME: 'User',
    Schema: UserSchema,
    Model: null,
    options: UserOptions

};

export = UserDefinition;