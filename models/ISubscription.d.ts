/// <reference path='../typings/mongoose.d.ts' />

interface ISubscription {

    planId:         string;

    activation:     Date;
    expiration:     Date;

    paid:           number;
    cardId:         string;

    currency:       string;

    discount:       number;

    userslimit:     number;

}