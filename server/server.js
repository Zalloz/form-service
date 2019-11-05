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

    } else if (req.method === 'POST' && req.url === '/') {
        let data = ''
        req.on('data', function (chunk) {
            data += chunk;
        });
        req.on('end', function () {
            req.rawBody = data;
            if (data && data.indexOf('{') > -1) {
                req.body = JSON.parse(data);
            }
            data = req.body
            postgres.query(`INSERT INTO agents(agent_name,recent_sales,phone,agent_type,average_stars,num_ratings,agent_photo) VALUES('${data.agent_name}',${data.recent_sales},'${data.phone}','${data.agent_type}',${data.average_stars},${data.num_ratings},'${data.agent_photo}')`, (err, agentInsert) => {
                if (err) {
                    console.log('Insert query error')
                    console.log(err)
                } else {
                    res.end()
                }
            })
        });
    } else if (req.method === 'PUT' && req.url === '/') {
        let data = ''
        req.on('data', function (chunk) {
            data += chunk;
        });
        req.on('end', function () {
            req.rawBody = data;
            if (data && data.indexOf('{') > -1) {
                req.body = JSON.parse(data);
            }
            data = req.body
            postgres.query(`UPDATE agents SET agent_name = '${data.agent_name}', recent_sales = ${data.recent_sales}, phone = '${data.phone}', agent_type = '${data.agent_type}', average_stars = ${data.average_stars}, num_ratings = ${data.num_ratings}, agent_photo = '${data.agent_photo}'  WHERE id = ${data.id}`, (err, updateAgent) => {
                if (err) {
                    console.log('Update query error')
                    console.log(err)
                } else {
                    res.end()
                }
            })
        });
    } else if (req.method === 'DELETE' && req.url === '/') {
        let data = ''
        req.on('data', function (chunk) {
            data += chunk;
        });
        req.on('end', function () {
            req.rawBody = data;
            if (data && data.indexOf('{') > -1) {
                req.body = JSON.parse(data);
            }
            data = req.body
            postgres.query(`DELETE FROM agents WHERE id = ${data.id}`, (err, deleteAgent) => {
                if (err) {
                    console.log('Delete query error')
                } else {
                    res.end()
                }
            })
        });
    }
}).listen(8081, function () {
    // console.log('Server started on port 8081');
});
