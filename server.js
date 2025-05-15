"use strict";

const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.ENABLE_REQUEST_LOGGING === "true") {
    const morgan = require("morgan");

    app.use(morgan("dev"));
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});
