const mailer = require('nodemailer');
const pool = require('nodemailer-smtp-pool');
const log = require('debug')('r2:mailer');

module.exports = function Mailer(app, conf) {
  const mailerConf = conf || app.config('mailer');
  if (!mailerConf) {
    return log('mailer config not found!');
  }

  return mailer.createTransport(pool(mailerConf));
};
