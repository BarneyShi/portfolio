const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const multer = require("multer");
const multerFormHandler = multer();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/send", multerFormHandler.none(), (req, res) => {
  res.send("HTLLo");

  const context = `
  <p>New message from portfolio website</p>
  <ul>
    <li>${req.body.name}<li>
    <li>${req.body.email}<li>
  </ul>
  <h3>Context</h3>
  <p>${req.body.message}</p>
  `;

  //Code sippet from nodemailer
  main = async () => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "barneysportfolio@gmail.com", // generated ethereal user
        pass: "ysmzbonruqvqqfvd", // generated ethereal password
      },
      tls: {
        rejectedUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Barney\'s Portfolio 👀" <barneysportfolio@gmail.com>', // sender address
      to: "barneyshek@gmail.com", // list of receivers
      subject: "Portfolio Email Contact", // Subject line
      text: "Hello world?", // plain text body
      html: context, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  };

  main().catch(console.error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to ${PORT}`));
