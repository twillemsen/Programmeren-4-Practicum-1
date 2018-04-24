const express = require('express');

const app = express();

app.get('/', function(request, response) {
    response.send('Hello Avans!');
})

app.get('/about', function(request, response) {
    response.send('Written by Tobias Willemsen');
})

app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
})

app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
})

app.get('/json', function(req, res) {
    let json = {
        text: "Dit is een JSON object",
        author: "Tobias Willemsen"
    }

    res.status(200).send(json).end();
});

app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
})

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
})