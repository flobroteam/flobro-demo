const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const cors = require("cors")({
    origin: true
});


const API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(API_KEY);

exports.emailMessage = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        const msg = {
            to: 'info@flobrofitness.com',
            from: 'test@flobrodemo.com',
            subject: 'New Program Request',
            templateId: 'd-d9f158ed05b44a799880e0765df62c57',
            dynamic_template_data: req.body,
        };
        sgMail.send(msg)
        res.status(200).send({status: 'success'});
    });
});