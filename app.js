const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const postroutes = require("./routes/postroute");
const app = express();
app.use(cors({ credentials: true, origin: "https://bamlakugetachew.netlify.app" }));
app.use(cookieParser());
app.use(express.json());
app.use("/cv", express.static("cv"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(morgan("combined"));
app.use("/api", postroutes);
module.exports = app;
