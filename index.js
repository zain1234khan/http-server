const http = require("http");   
const express = require("express");
const app = express();

app.get("/", (req, res) => {

   return res.send("Hello from about page");

});


app.get("/about", (req, res) => {

   return res.send("Hello from about page" + 'hey' + ''+  req.query.name +''+ 'you are ' + req.query.age + ' years old');

});

function myhandler(req, res) {

}
const myserver = http.createServer(app);

myserver.listen(8000, () => {
    console.log("Server started!");
//sjscak
});