const mailer = require('nodemailer');
const pool = require('nodemailer-smtp-pool');

module.exports = function Mailer(app, conf) {
  const mailerConf = conf || app.config('mailer');
  if (!mailerConf) {
    return Promise.reject('mailer config not found!');
  }

  return mailer.createTransport(pool(mailerConf));
};
