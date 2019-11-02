const http = require('http');
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const publicDirectory = path.join(__dirname, 'public')

const postgres = new Client({
    user: "nick",
    host: "localhost",
    database: "formservice"
});
postgres.connect();

function getAgent(agent, cb) {
    postgres.query(`select * from agents where id = ${agent}`, (err, res) => {
        if (err) {
            //Oops!
            cb(err, null)
        } else {
            cb(null, res)
        }
    })
}

http.createServer(function (req, res) {
    if (req.method === 'GET') {
        if (req.url === '/agents') {
            let agents = []
            let count = 0
            for (let i = 0; i < 4; i++) {
                let randomAgent = Math.floor(Math.random() * 10000000)
                getAgent(randomAgent, (err, data) => {
                    count++
                    if (err) {
                        //Oops!
                    } else {
                        agents.push(data.rows[0])
                    }
                    if (count === 4) {
                        res.writeHead(200, {
                            'Content-Type': 'application/json',
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Headers": "X-Requested-With"
                        })
                        res.end(JSON.stringify(agents))
                    }
                })
            }
        } else {
            fs.readFile(req.url === '/' ? publicDirectory + '/index.html' : publicDirectory + req.url, (err, content) => {
                let contentType = 'text/html';
                let extension = path.extname(req.url)
                if (extension === '.js') {
                    contentType = 'text/javascript'
                }
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            })
        }
    } else {
        res.write('Error!');
        res.end();
    }
}).listen(8081, function () {
    // console.log('Server started on port 8081');
});

/*

http.createServer(function (request, response) {
    console.log('request starting...');

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }

    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', function (error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');
*/