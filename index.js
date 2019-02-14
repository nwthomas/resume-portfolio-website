const express = require("express");
const server = express();
const path = require("path"); // Path module import from Node.js
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan());

// Static file declaration
server.use(express.static(path.join(__dirname, "client/build")));

// Production mode
if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, "client/build")));
  server.get("*", (req, res) => {
    res.sendFile(path.join((__dirname = "client/build/index.html")));
  });
}

// Build mode
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

// Uses /mail/nathan route for new email from client
server.post("/mail/nathan", (req, res) => {
  const { name, email, subject, message } = req.body;
  const response = res;
  if (!name || !email || !subject || !message)
    return res.status(400).json({
      message: "Please provide a name, email, subject, and bio for the email."
    });

  async function main() {
    // Settings to connect to Apple Mail per NodeMailer docs
    let transporter = nodemailer.createTransport({
      host: process.env.HOST_NAME,
      port: process.env.EMAIL_PORT,
      tls: process.env.TLS,
      auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
      }
    });
    // Structure of the email message
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `${subject} from ${name}`,
      text: `${email}\n${message}`
    };
    // Sends email
    let info = await transporter.sendMail(mailOptions);
  }
  // Calls mailing function that resolves to promise of success/error
  main()
    .then(emailRes => {
      response.status(200).json({ success: true });
    })
    .catch(emailErr => response.status(400).json({ success: false }));
});

server.listen(port, () =>
  console.log(`\n***** Listening on Port ${port} *****\n`)
);
