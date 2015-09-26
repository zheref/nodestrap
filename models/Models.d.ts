/// <reference path='../typings/mongoose.d.ts' />
/// <reference path='./IUser.d.ts' />
/// <reference path='./IPlan.d.ts' />

interface IModelsLocator {

    User: mongoose.Model<IUser>;
    Plan: mongoose.Model<IPlan>;

}