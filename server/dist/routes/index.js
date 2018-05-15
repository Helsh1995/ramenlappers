"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mail_route_1 = require("./mail.route");
const express_1 = require("express");
class RoutesManager {
    constructor(app) {
        this._app = app;
        this._initRoutes();
    }
    // From here, you can init other managers: like a user route manager
    _initRoutes() {
        const router = express_1.Router();
        router.get('/', ((req, res, next) => {
            res.send('');
        }));
        this._app.use('/', router);
        this._app.use('/api/v1/mail', new mail_route_1.MailRoute().init());
    }
}
exports.RoutesManager = RoutesManager;
//# sourceMappingURL=index.js.map