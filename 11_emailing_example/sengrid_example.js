const dotenv = require('dotenv');
const path = require('path');
const sgMail = require('@sendgrid/mail');

dotenv.config({ path: path.join(__dirname, '.env') });
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function main() {
  const res = await sgMail.send({
    from: process.env.NODEMAILER_LOGIN,
    to: process.env.NODEMAILER_LOGIN_TO,
    subject: 'Sending with SendGrid is Fun',
    templateId: 'd-933e0dbbf42f4e61a697d0363b8665fd',
    dynamicTemplateData: {
      organizationName: 'Test sendMail',
    },
  });

  console.error(res);
}
main();
