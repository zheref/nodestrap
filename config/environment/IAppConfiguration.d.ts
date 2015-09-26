/// <reference path='../../typings/node.d.ts' />
/// <reference path='../../typings/lodash.d.ts' />

interface IAppConfiguration {
    env?: string;

    // Root path of server
    root?: string;

    // Server port
    port?: number;

    // Should we populate the DB with sample data?
    seedDB?: boolean;

    // Secret for session, you will want to change this and make it an environment variable
    secrets?: {
        session: string
    };

    // List of user roles
    userRoles?: string[];

    // MongoDB connection options
    mongo?: {
        uri?: string;

        options?: {
            db: {
                safe: boolean
            }
        };
    };

}
