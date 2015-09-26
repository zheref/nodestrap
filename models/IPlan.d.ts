/// <reference path='../typings/mongoose.d.ts' />

interface IPlan extends mongoose.Document {

    id:             string;

    name:           string;

    monthprice:     number;
    annualprice:    number;

    currency:       string;

    discount:       number;

    userslimit:     number;

    period:         string;
    activation:     Date;
    expiration:     Date;

    enabled:        boolean;

    description:    string;
    benefits:       string;

    terms:          string;

    ads:            boolean;

    feature1:       boolean;
    feature2:       boolean;
    feature3:       boolean;
    feature4:       boolean;

}