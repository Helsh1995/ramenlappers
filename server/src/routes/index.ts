import {MailRoute} from "./mail.route";
import {Express, Router} from "express";

export class RoutesManager {

    private _app: Express;

    constructor(app: Express) {
        this._app = app;

        this._initRoutes();
    }

    // From here, you can init other managers: like a user route manager
    private _initRoutes(): void {

        const router = Router();

        router.get('/', ((req, res, next) => {
            res.send('Welcome to the backend');
        }));

        this._app.use('/', router);
        this._app.use('/api/v1/mail', new MailRoute().init());
    }
}
