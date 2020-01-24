// // const translatorRoute = require("./api/routes/translatorRoute");

// // // app.use(express.static(path.join(__dirname, "build")));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());

// // // Catch all other routes and return the index file
// // // app.get("*", (req, res) => {
// // //   res.sendFile(path.join(__dirname, "build/index.html"));
// // // });

// // app.use("/api/translator", translatorRoute);

// // /**
// //  * Get port from environment and store in Express.
// //  */
// // const port = process.env.PORT || "3002";
// // app.set("port", port);

// // /**
// //  * Create HTTP server.
// //  */
// // const server = http.createServer(app);

// // /**
// //  * Listen on provided port, on all network interfaces.
// //  */
// // server.listen(port, () => console.log(`API running on ${port}`));

// // node mailer
// "use strict";
// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   async function main() {

//     let transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false,
//         requireTLS: true,
//         auth: {
//             user: 'umarsuhai112@gmail.com',
//             pass: 'semil123'
//         }
//     });

//   transporter.sendEMail = function (mailRequest) {
//     return new Promise(function (resolve, reject) {
//       transporter.sendMail(mailRequest, (error, info) => {
//         if (error) {
//           reject(error);
//           console.log(error);

//         } else {
//           resolve("The message was sent!");
//         }
//       });
//     });
//   }

//   module.exports = transporter;
//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Umar Suhail 👻" <umarsuhai112@gmail.com>', // sender address
//     to: "sachinmanoharan100@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Uluppundo naaari", // plain text body
//     html: "<b>Hello world?</b>" // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }
// Get dependencies
/**
 * Server config
 * @Author : Umar Suhail
 */
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const morgan = require('morgan');
const proxy = require("express-http-proxy");
// const cors = require('cors');
const request = require("request");
const dotenv = require("dotenv");
const myenv = dotenv.config();
const app = express();
var cors = require("cors");
app.use(cors());
const translatorRoute = require("./api/routes/translatorRoute");
// app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.static(__dirname + '/static', { dotfiles: 'allow' }))
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Catch all other routes and return the index file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.use("/api/translator", translatorRoute);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || "3002";
app.set("port", port);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => console.log(`API running on ${port}`));