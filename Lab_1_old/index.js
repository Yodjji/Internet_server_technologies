var http = require("http");
var url = require("url");
const host = "localhost";
const port = 8000;
var days = [ // создание массива, в котором хранятся дни недели
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
];

var server = http.createServer((req, res) => { // вывод имени и дня недели
    var date = new Date().getDay();
    var day = days.find((item, index, array) => index === date);
    var name = url.parse(req.url, true).query;
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`Привет ${name.name}, сегодня ${day}.`);
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
