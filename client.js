const http = require("http");

const url = "http://localhost:8080";

const destinationPath = "localhost";

const destinationPORT = "8000";

const options = {method : "GET", headers: {"destinationpath" : destinationPath, "destinationport" : destinationPORT}};

const req = http.request(url, options, (res) => {

    let data = "";

    res.on("data", (chunk) => {

        data += chunk;
    });

    res.on("end", () => {

        console.log("Response from the server: ", data);
    
    });

});

req.on("error", (err) => {

    console.error("Error: ", err);
});

req.end();