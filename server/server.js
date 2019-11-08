require('newrelic');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const ReactDOMServer = require("react-dom/server");
const redis = require('redis')

import React from "react";
import App from "../client/src/components/Index.jsx";

const publicDirectory = path.join(__dirname, 'public');
const port = process.env.PORT || 80

const redisClient = redis.createClient({
    host: "ec2-52-15-70-152.us-east-2.compute.amazonaws.com",
    port: "6379"
});

const postgres = new Client({
    user: "postgres",
    host: "ec2-3-14-133-172.us-east-2.compute.amazonaws.com",
    database: "formservice",
    password: "root"
});
postgres.connect();

function getAgent(agent, cb) {
    redisClient.get(agent.toString(), (err, reply) => {
        if (err) {
            console.log('Redis get error', err)
            cb(err, null)
        } else {
            if (reply === null) {
                postgres.query(`select * from agents where id = ${agent}`, (err, res) => {
                    if (err) {
                        //Oops!
                        cb(err, null);
                    } else {
                        redisClient.set(agent.toString(), JSON.stringify(res), (err, success) => {
                            if (err) {
                                console.log('Redis set error', err)
                                cb(err, null)
                            } else {
                                cb(null, res);
                            }
                        })
                    };
                });
            } else {
                cb(JSON.parse(reply), null)
            }
        }
    })
};

http.createServer(function (req, res) {
    if (req.method === 'GET') {
        let contentType = 'text/html';
        let extension = path.extname(req.url);
        if (extension === '.js') {
            contentType = 'text/javascript';
            hostJsOrCss();
        } else if (extension === '.css') {
            contentType = 'text/css';
            hostJsOrCss();
        } else {
            let agents = [];
            let count = 0;
            for (let i = 0; i < 4; i++) {
                let randomAgent = Math.floor(Math.random() * 10000000);
                getAgent(randomAgent, (err, data) => {
                    count++;
                    if (err) {
                        //Oops!
                    } else {
                        agents.push(data.rows[0]);
                    };
                    if (count === 4) {
                        res.writeHead(200, {
                            'Content-Type': 'text/html',
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Headers": "X-Requested-With"
                        });
                        const reactString = ReactDOMServer.renderToString(<App agents={agents} />);
                        res.end(reactString, 'utf-8');
                    };
                });
            };
        };
        function hostJsOrCss() {
            fs.readFile(req.url === '/' ? publicDirectory + '/index.html' : publicDirectory + req.url, (err, content) => {
                res.writeHead(200, {
                    'Content-Type': contentType,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "X-Requested-With"
                });
                res.end(content, 'utf-8');
            });
        };
    } else if (req.method === 'POST' && req.url === '/') {
        let data = '';
        req.on('data', function (chunk) {
            data += chunk;
        });
        req.on('end', function () {
            req.rawBody = data;
            if (data && data.indexOf('{') > -1) {
                req.body = JSON.parse(data);
            };
            data = req.body;
            postgres.query(`INSERT INTO agents(agent_name,recent_sales,phone,agent_type,average_stars,num_ratings,agent_photo) VALUES('${data.agent_name}',${data.recent_sales},'${data.phone}','${data.agent_type}',${data.average_stars},${data.num_ratings},'${data.agent_photo}')`, (err, agentInsert) => {
                if (err) {
                    // console.log('Insert query error')
                    // console.log(err)
                    res.end();
                } else {
                    res.end();
                };
            });
        });
    } else if (req.method === 'PUT' && req.url === '/') {
        let data = '';
        req.on('data', function (chunk) {
            data += chunk;
        });
        req.on('end', function () {
            req.rawBody = data;
            if (data && data.indexOf('{') > -1) {
                req.body = JSON.parse(data);
            };
            data = req.body;
            postgres.query(`UPDATE agents SET agent_name = '${data.agent_name}', recent_sales = ${data.recent_sales}, phone = '${data.phone}', agent_type = '${data.agent_type}', average_stars = ${data.average_stars}, num_ratings = ${data.num_ratings}, agent_photo = '${data.agent_photo}'  WHERE id = ${data.id}`, (err, updateAgent) => {
                if (err) {
                    // console.log('Update query error');
                    // console.log(err);
                    res.end();
                } else {
                    res.end();
                };
            });
        });
    } else if (req.method === 'DELETE' && req.url === '/') {
        let data = '';
        req.on('data', function (chunk) {
            data += chunk;
        });
        req.on('end', function () {
            req.rawBody = data;
            if (data && data.indexOf('{') > -1) {
                req.body = JSON.parse(data);
            };
            data = req.body;
            postgres.query(`DELETE FROM agents WHERE id = ${data.id}`, (err, deleteAgent) => {
                if (err) {
                    // console.log('Delete query error')
                    res.end();
                } else {
                    res.end();
                };
            });
        });
    };
}).listen(port, function () {
    console.log('Server started on port', port);
});
