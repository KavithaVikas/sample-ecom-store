let app = require('./app');
let port = 5001;


let server = app.listen(port, function() {
    console.log('server listening at ' + port);
});

module.exports = server;