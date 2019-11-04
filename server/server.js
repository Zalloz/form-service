const http = require('http');
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const ReactDOMServer = require("react-dom/server");

import React from "react";
import App from "../client/src/components/Index.jsx";

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
        let contentType = 'text/html';
        let extension = path.extname(req.url)
        if (extension === '.js') {
            contentType = 'text/javascript'
            hostJsOrCss()
        } else if (extension === '.css') {
            contentType = 'text/css'
            hostJsOrCss()
        } else {
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
                            'Content-Type': 'text/html',
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Headers": "X-Requested-With"
                        })
                        const reactString = ReactDOMServer.renderToString(<App agents={agents} />)
                        console.log(reactString)
                        res.end(reactString, 'utf-8')
                    }
                })
            }
        }
        function hostJsOrCss() {
            fs.readFile(req.url === '/' ? publicDirectory + '/index.html' : publicDirectory + req.url, (err, content) => {

                res.writeHead(200, {
                    'Content-Type': contentType,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "X-Requested-With"
                });
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
