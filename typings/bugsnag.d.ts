/// <reference path='express.d.ts' />

declare module bugsnag {

    interface BugsnagStatic {
        register: (string) => void;
        notify: (error: Error, options?: Object) => void;
        requestHandler: Express.RequestHandler;
        errorHandler: Express.RequestHandler;
    }

}

declare module 'bugsnag' {
    var bugsnag: bugsnag.BugsnagStatic;
    export = bugsnag;
}