var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)
    , fs = require('fs')

app.listen(8081);

function handler (req, res) {
    fs.readFile(".." + req.url,
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.sockets.on('connection', function (socket) {
   // socket.emit('news', { hello: 'world' });
    socket.on('init', function (data) {
        console.log(data);
    });
});