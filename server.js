const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {

    console.log("Request has been received from the client.");

    res.send("Hello from server!");

    res.end();

    console.log("Response has been sent to the client and response has been ended.");
});

app.listen(PORT, () => {

    console.log(`Server listening at PORT: ${PORT}.`);
});