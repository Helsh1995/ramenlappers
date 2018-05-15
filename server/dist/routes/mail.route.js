"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nodemailer = require("nodemailer");
class MailRoute {
    constructor() {
        this._router = express_1.Router();
    }
    init() {
        this._router.get('/', ((req, res, next) => {
            res.send('You really want to send an email?');
        }));
        this._router.post('/', this.sendMail);
        return this._router;
    }
    sendMail(req, res, next) {
        console.log(req.body);
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: false,
            auth: {
                user: 'shawnhellinckx@gmail.com',
                pass: 'InesjeLove1003'
            },
            proxy: 'http://clientproxy.basf.net:8080/'
        });
        const mailOptions = {
            from: 'shawnhellinckx@gmail.com',
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.message
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err)
                res.status(400).send(`The mail couldn't be sended`);
            if (info)
                res.status(200).send(`${info}`);
            console.log(err);
            console.log(info);
        });
        // res.status(200)
        //     .send('The email was sent my friend');
    }
}
exports.MailRoute = MailRoute;
//# sourceMappingURL=mail.route.js.map