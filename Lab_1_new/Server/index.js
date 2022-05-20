const http = require("http");
const host = "localhost";
const port = 8000;

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


// let url = require("url")

// http
//     .createServer(function(req, res) {
//         let URL = url.parse(req.url, true);
//         let user_name = URL.query.name;
//         let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//         let current_day = days[new Date().getDay()];
//         res.write("Hello " + user_name + ", today is " + current_day);
//         res.end();
//     })
//     .listen(8080);
