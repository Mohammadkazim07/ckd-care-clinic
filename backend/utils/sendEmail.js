const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text) => {
  try {
    await sgMail.send({
      to,
      from: process.env.EMAIL_USER, // must be verified in SendGrid
      subject,
      text,
    });

    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error(
      "❌ SendGrid email failed:",
      error.response?.body || error.message
    );
    throw error;
  }
};

module.exports = sendEmail;
