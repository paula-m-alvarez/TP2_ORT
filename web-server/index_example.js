import http from 'http';

const PORT = 3000;

const inventors = [
    {first: 'Albert', last: "Einstein", year: 1879 },
    {first: 'Albert', last: "Einstein", year: 1879 },
    {first: 'Albert', last: "Einstein", year: 1879 },
];

http
    .createServer((request, response) => {
        switch(request.url){
            case '/':
                response.writeHead(200, {"Content-Type" : "text/html"});
                response.write("Esta es la informacion de la API");
                break
            case '/api/inventors':
                response.writeHead(200, {"Content-Type" : "application/json"});
                response.write(JSON.stringify(inventors, null, ' '));
                break
            default:
                response.writeHead(404, {"Content-Type" : "text/html"});
                response.write("El recurso no encontrado");
                break;
        }
        response.end();

}).listen(PORT, '127.0.0.1', () => {
    console.log(`Servidor Web en el puerto ${PORT} levantado`)
})