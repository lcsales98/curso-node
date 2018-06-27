var http = require('http');
var server = http.createServer(function(req, res) {
    var categoria = req.url;

    if (categoria == '/moda') {
        res.end("<html><body> Portal de Moda </body></html>");
    } else if (categoria == '/tecnologia') {
        res.end("<html><body> Portal de Tecnologia </body></html>");
    } else {
        res.end("<html><body> Portal de Inicio </body></html>");
    }
}); //.listen(3000);

server.listen(3000);