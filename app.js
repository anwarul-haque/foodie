const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const cors = require("cors");
const morgan = require("morgan");
const { basePath, baseRouter } = require("./helper/routeHandler");
const CORS_ORIGIN = process.env.NODE_ENV === 'production' ? process.env.HOST : '*'

app.use(cors(CORS_ORIGIN));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(basePath, baseRouter);

app.use((req, res, next) => {
    const error = new Error("route Not found..");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: { message: error.message } });
});

module.exports = app;