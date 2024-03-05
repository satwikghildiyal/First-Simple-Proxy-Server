const http = require("http");

const httpProxy = require("http-proxy");

const webProxy = httpProxy.createProxyServer();

const PORT = 8080;

const server = http.createServer((req, res) => {

    console.log("Proxy server received a request from the client.");

    const destinationPath = req.headers["destinationpath"];

    const destinationPORT = req.headers["destinationport"];

    webProxy.web(req, res, {target: `http://${destinationPath}:${destinationPORT}`});

    console.log("Response from the destination server has been sent to the client.");


});

server.listen(PORT, () => {

    console.log(`Proxy-server listening on PORT: ${PORT}.`);
});

