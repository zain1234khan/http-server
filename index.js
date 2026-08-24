const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {

    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.method} ${req.url} new request received\n`;

    const myUrl = url.parse(req.url, true);

    // Save request to log.txt
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log("Error writing log:", err);
        }
    });

    switch (myUrl.pathname) {

        case "/":
            if (req.method === "GET") {
                res.end("homepage");
            } else {
                res.end("Method Not Allowed");
            }
            break;

        case "/about":
            const username = myUrl.query.myname;
            res.end(`Hi, ${username}`);
            break;

        case "/search":
            const search = myUrl.query.search_query;
            res.end("Here are your results for " + search);
            break;

        case "/signup":
            if (req.method === "GET") {
                res.end("this is a signup form");
            } else if (req.method === "POST") {
                // DB query
                res.end("success");
            } else {
                res.end("Method Not Allowed");
            }
            break;

        default:
            res.end("404 Not Found");
    }
});

myserver.listen(8000, () => {
    console.log("Server started!");
//sjscak
});