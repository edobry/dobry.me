var http = require("http"),
    static = require("node-static");

var log = message => console.log(message);

var file = new static.Server("./");

http.createServer((req, res) => {
    req.on("end", () => {
        log(`serving ${req.url}`); 
        file.serve(req, res);
    }).resume();
}).listen(80)

log("server listening on port 80");
