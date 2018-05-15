import {check} from 'express-validator/check';

export const SEND_MAIL_VALIDATOR = [
    check('from').isEmail(),
    check('to').isEmail(),
    check('subject').exists(),
    check('message').exists()
];