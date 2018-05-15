"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.app = express();
    }
    init(port = 3000) {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.header('Access-Control-Allow-Methods', '*');
            next();
        });
        this.app.listen(port, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            new routes_1.RoutesManager(this.app);
            console.log(`server is listening on ${port}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map