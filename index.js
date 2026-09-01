const http = require("http"); 
const fs = require("fs"); 
const express = require("express"); 
const app = express(); 

app.use((req, res, next) => {

    const log = `${Date.now()}: ${req.method} ${req.url} new request received\n`;

    fs.appendFile("log.txt", log, (err) => {

        if (err) {
            console.log("Error writing log:", err);
        }

    });

    next();
});

app.get("/", (req, res) => {
    return res.send(`
      

            <style>
            
                body {
                    font-family: Arial, sans-serif;
                    background: #f4f4f4;
                    margin: 0;
                }

                nav {
                    background: #222;
                    padding: 20px;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                    margin-right: 20px;
                }

                .container {
                    width: 80%;
                    max-width: 800px;
                    margin: 80px auto;
                    background: white;
                    padding: 40px;
                    text-align: center;
                    border-radius: 10px;
                }

                h1 {
                    margin-bottom: 10px;
                }

                p {
                    color: #666;
                }
            </style>
        </head>

        <body>

            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>

            <div class="container">
                <h1>Hello 👋</h1>
                <p>Welcome to my Express.js website.</p>
            </div>

        </body>
        </html>
    `);
});


app.get("/about", (req, res) => {
    return res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>About</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f4f4f4;
                    margin: 0;
                }

                nav {
                    background: #222;
                    padding: 20px;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                    margin-right: 20px;
                }

                .container {
                    width: 80%;
                    max-width: 700px;
                    margin: 80px auto;
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                }

                h1 {
                    margin-bottom: 25px;
                }

                .info {
                    background: #f4f4f4;
                    padding: 20px;
                    border-radius: 8px;
                }

                .info p {
                    font-size: 18px;
                    margin: 12px 0;
                }

                .label {
                    font-weight: bold;
                }
            </style>
        </head>

        <body>

            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>

            <div class="container">

                <h1>About Me</h1>

                <div class="info">
                    <p>
                        <span class="label">Name:</span>
                        ${req.query.name || "Not provided"}
                    </p>

                    <p>
                        <span class="label">Age:</span>
                        ${req.query.age || "Not provided"} years old
                    </p>
                </div>

            </div>

        </body>
        </html>
        
    `);
});


function myhandler(req, res) {

}


const myserver = http.createServer(app);

myserver.listen(8000, () => {
    console.log("Server started!");
});
