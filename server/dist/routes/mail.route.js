"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nodemailer = require("nodemailer");
const mail_config_1 = require("../config/mail.config");
const send_mail_validator_1 = require("../validators/send_mail.validator");
const check_1 = require("express-validator/check");
class MailRoute {
    constructor() {
        this._router = express_1.Router();
    }
    init() {
        this._router.get('/', ((req, res, next) => {
            res.send('You really want to send an email?');
        }));
        this._router.post('/', send_mail_validator_1.SEND_MAIL_VALIDATOR, this.sendMail);
        return this._router;
    }
    sendMail(req, res, next) {
        const errors = check_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
        }
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: mail_config_1.MAIL_CONFIG.mail,
                pass: mail_config_1.MAIL_CONFIG.pwd
            }
        });
        const mailOptions = {
            from: req.body.from,
            to: req.body.to,
            subject: req.body.subject,
            html: req.body.message
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err)
                res.status(400).send(`The mail couldn't be send`);
            if (info)
                res.status(200).send(`${JSON.stringify(info)}`);
        });
    }
}
exports.MailRoute = MailRoute;
//# sourceMappingURL=mail.route.js.map