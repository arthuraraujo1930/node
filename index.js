const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
    console.log(req.url);
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, ('content-type' , 'text/html'));
        res.write(data);
        return res.end();
    })
    /*
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end("Criando servidor Node.js");*/
})
server.listen(port, hostname, () => {
    console.log("Servidor Rodando...");
});