const dotenv = require('dotenv');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');

dotenv.config({ path: path.join(__dirname, '.env') });

const config = {
  host: 'smtp.ukr.net',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_LOGIN,
    pass: process.env.NODEMAILER_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

async function main() {
  const result = await transporter.sendMail({
    from: process.env.NODEMAILER_LOGIN,
    to: process.env.NODEMAILER_LOGIN_TO,
    subject: 'Nodemailer test',
    html: '<b>Test has passed successfully</b>',
    attachments: [
      {
        filename: 'nodejs.png',
        contentType: 'image/png',
        content: await fs.promises.readFile('nodejs.png'),
      },
    ],
  });
}
main();
