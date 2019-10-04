// Get dependencies
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

const translatorRoute = require("./api/routes/translatorRoute");

// app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Catch all other routes and return the index file
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build/index.html"));
// });

app.use("/api/translator", translatorRoute);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || "3002";
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on ${port}`));
