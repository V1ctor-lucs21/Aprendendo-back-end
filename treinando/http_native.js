// Usando o Método native
import http from 'node:http';

const server= http.createServer((req,res)=>{
    // Verificando a requisição e o metodo
    if(req.url==="/api/hello" && req.method==="GET"){
        res.writeHead(200,{'Content-Type':'application/json' });
        res.end(JSON.stringify({message: "Ola do Nativo Http, do node JS!"}))
    }
    else if(req.url==="/api/health" && req.method==="GET"){
        res.writeHead(200,{'content-Type': 'application/json'});
        res.end(JSON.stringify({message:"System is healthy"}));
    }
    else if(req.url==="/api/admin" && req.method==="GET"){
        res.writeHead(403,{'content-Type': 'application/json'});
        res.end(JSON.stringify({error:"Access Denied"}));
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end(JSON.stringify({error: "404 Not Found"}));
    }
});

server.listen(3000,()=>{
 console.log("🚀 Native server running at http://localhost:3000/api/hello");
})