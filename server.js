const http = require('http')

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.writeHead(200, {'Content-Type' : 'text/plain'})
        response.end('Welcome to the landing page.')
    } else if(request.url === '/about'){
        response.writeHead(200, {'Content-Type' : 'text/plain'})
        response.end('Welcome to the the about us page.')
    } else {
        response.writeHead(404, {'Content-Type' : 'text/plain'})
        response.end('Page not found.')
    }
})

const PORT = 4500;

server.listen(PORT, () => {
    console.log('Server is running.')
})