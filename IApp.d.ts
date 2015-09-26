/// <reference path='typings/express.d.ts' />
/// <reference path='./models/Models.d.ts' />

interface IApp extends Express.Express {

    Models: IModelsLocator;

}