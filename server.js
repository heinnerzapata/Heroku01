var http = require('http');

var server = http.createServer(function(request,response){

  response.writeHead(200,{"Content-Type":"text/html"})
  response.end("<h1>Hello world</h1>");

});

var port = Number(process.env.PORT || 3000);

server.listen(port);

console.log("Server running at: http://127.0.0.1:3000");
