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

app.get('/api', function(req, res) {
    let pim = {
    "results": [
        {
        "gender": "male",
        "name": {
        "title": "miss",
        "first": "Pim",
        "last": "Pom"
        },
        "location": {
        "street": "Claudius Prinsenlaan 126",
        "city": "Breda",
        "state": "Noord-Brabant",
        "postcode": 4818
        },
        "email": "pimpom@avans.nl",
        "login": {
        "username": "bigelephant146",
        "password": "mamas",
        "salt": "X8Rdl0bG",
        "md5": "36ffb8367b44c1cfb54170f239651fcd",
        "sha1": "2e7b0f39a8f6b2f2776227bbf6677dd2ac508c69",
        "sha256": "e8cda96381c0fb071d4124fa50c5209fbfae8f52e312be63e93e3a2305867ec6"
        },
        "dob": "1983-01-30 04:05:56",
        "registered": "2008-03-07 10:43:57",
        "phone": "06-12345678",
        "cell": "399-161-2501",
        "id": {
        "name": "",
        "value": null
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
        },
        "nat": "CA"
        }
        ],
        "info": {
        "seed": "38fdc47d472aaced",
        "results": 1,
        "page": 1,
        "version": "1.1"
        }
    }

    res.status(200).send(pim).end();
})

app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
})

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
})