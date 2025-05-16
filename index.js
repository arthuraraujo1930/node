const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;
fs.writeFile('teste.txt', '2º DS PW2', (err) => {
    if (err) {
        console.log("Arquivo criado com sucesso")
    }
})

fs.appendFile("teste.txt", "\niciando Back-end", (err) => {
    if (err) throw err
    console.log("Arquivo criado com sucesso")
})

const server = http.createServer((req, res) => {
    if (req.url == "/login") {
        fs.readFile('index.html', (err, data) => {
            fs.writeFile('teste.txt', '2º DS PW2', (err) => {
                if (err) {
                    console.log("Arquivo criado com sucesso")
                }
            })
            
            fs.appendFile("teste.txt", "\niciando Back-end", (err) => {
                if (err) throw err
                console.log("Arquivo criado com sucesso")
            })
            

            res.writeHead(200, ('content-type', 'text/html'));
            res.write(data);
            return res.end();
        })

    } else {
        return req.end();
    }
})

server.listen(port, hostname, () => {
    console.log("Servidor Rodando...");
})