var http = require("http"),
    static = require("node-static");

var log = message => console.log(message);

var file = new static.Server("./");

const port = 2129;

http.createServer((req, res) => {
    req.on("end", () => {
        log(`serving ${req.url}`); 
        file.serve(req, res);
    }).resume();
}).listen(port);

log(`server listening on port ${port}`);
