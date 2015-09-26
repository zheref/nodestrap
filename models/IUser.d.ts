/// <reference path='../typings/mongoose.d.ts' />
/// <reference path='./ISubscription.d.ts' />

interface IUser extends mongoose.Document {

    id: string;

    username: string;
    password: string;
    email: string;
    emailVerified: string;

    createdAt: Date;
    updatedAt: Date[];

    name: string;
    firstname: string;
    lastname: string;

    profilePictureFilename: string;

    birthday: string;
    gender: string;

    subscriptions: ISubscription[];

}