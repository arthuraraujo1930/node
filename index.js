const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res)=>{
    if (req.url == '/Sobre.html'){
        fs.writeFile('texto.txt', '2ºDS PW2', (err) => {
            if(err) throw err;
            console.log('Arquivo criando')
        })
    }else if(req.url == '/index.html'){
        fs.readFile('index.html', (err, data) =>{
            res.writeHead(200, {'content-type' : 'text/html'});
            res.write(data);
            return res.end();
        })
    }else if(req.url == '/contato.html'){
        fs.appendFile('texto.txt', '\niciando back-end', (err) =>{
            if(err) throw err;
            console.log('Salvo a alteração');
        })

        
    }else{
        return res.end();
    }
})


/*fs.writeFile('teste.txt', '2º DS PW2', (err) => {
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
})*/