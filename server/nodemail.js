var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "Outlook",
  auth: {
    user: "catalouni_94@live.fr",
    pass: "catalouni94",
  },
});

module.exports.sendConfirmationMail = (email, activationCode) => {
  transporter
    .sendMail({
      from: "catalouni_94@live.fr",
      to: email,
      subject: "Confirm the activation of your account",
      html: `<h1>Confirmation e-mail</h1>
<h3>Hello! To activate your account, you have to click on the link below!</h3>
<a href=https://localhost:3000/confirm/${activationCode}>Click me!</a>
</div>`,
    })
    .catch((err) => console.log(err));
};
