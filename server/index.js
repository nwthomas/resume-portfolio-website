const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const server = express();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan());

server.post("/mail/nathan", (req, res) => {
  const { name, email, subject, message } = req.body;
  const response = res;
  if (!name || !email || !subject || !message)
    return res.status(400).json({
      message: "Please provide a name, email, subject, and bio for the email."
    });

  async function main() {
    let transporter = nodemailer.createTransport({
      host: process.env.HOST_NAME,
      port: process.env.EMAIL_PORT,
      tls: process.env.TLS,
      auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
      }
    });
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `${subject} from ${name}`,
      text: `${email}\n${message}`
    };
    let info = await transporter.sendMail(mailOptions);
    console.log("MessageId", info.messageId);
  }

  main()
    .then(emailRes => {
      response.status(200).json({ success: true });
    })
    .catch(emailErr => response.status(400).json({ success: false }));
});

server.listen(port, () =>
  console.log(`\n***** Listening on Port ${port} *****\n`)
);
