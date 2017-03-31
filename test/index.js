const chai = require('chai');
const r2mailer = require('../index');

const expect = chai.expect;
const mailer = r2mailer({}, {
  service: 'Mailgun',
  auth: {
    user: 'user',
    pass: 'pass',
  },
});

describe('r2mailer', () => {
  describe('settings', () => {
    it('should set service settings', () => {
      expect(mailer.transporter).to.not.equal(undefined);
      const { service, auth, host, port } = mailer.transporter.options;
      expect(service).to.equal('Mailgun');
      expect(auth.user).to.equal('user');
      expect(auth.pass).to.equal('pass');
      expect(host).to.equal('smtp.mailgun.org');
      expect(port).to.equal(587);
    });
  });
});
