var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const host = "localhost";
const port = 8000;
var array = []; //создание массива в котором будет хранится отправленная информация

app.use(bodyParser.text());
app.get("/", (req, res) => res.send("Wait..."));
app.get("/list", function(req, res) { // вывод данных
    res.send(array.toString());
});
app.post("/create", function(req, res) { // отправка данных
    array.push(req.body);
    console.log(req.body);
    res.send("Good");
});
app.listen(port, host);
