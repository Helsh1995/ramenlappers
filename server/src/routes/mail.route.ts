import {NextFunction, Request, Response, Router} from 'express';
import * as nodemailer from 'nodemailer';
import {MAIL_CONFIG} from '../config/mail.config';
import {SEND_MAIL_VALIDATOR} from '../validators/send_mail.validator';
import {validationResult} from 'express-validator/check';

export class MailRoute {

  private _router: Router;

  constructor() {
    this._router = Router();
  }

  public init(): Router {
    this._router.get('/', ((req, res, next) => {
      res.send('You really want to send an email?');
    }));

    this._router.post('/', SEND_MAIL_VALIDATOR, this.sendMail);

    return this._router;
  }

  public sendMail(req: Request, res: Response, next: NextFunction) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({errors: errors.array()});
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: MAIL_CONFIG.mail,
        pass: MAIL_CONFIG.pwd
      }
    });

    const mailOptions = {
      from: req.body.from,
      to: req.body.to,
      subject: req.body.subject,
      html: req.body.message
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.status(400).json({msg: `The mail couldn't be send`, error: err});
      }

      res.status(200).send(`${JSON.stringify(info)}`);

    });

  }

}
