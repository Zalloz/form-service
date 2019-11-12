require('newrelic');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const ReactDOMServer = require("react-dom/server");
const redis = require('redis')

setInterval(() => {
    console.log('Ping!')
}, 25000)

import React from "react";
import App from "../client/src/components/Index.jsx";
import { setInterval } from "timers";

const publicDirectory = path.join(__dirname, 'public');
const port = process.env.PORT || 80

const redisClient1 = redis.createClient({
    host: "ec2-52-15-70-152.us-east-2.compute.amazonaws.com",
    port: "6379"
});
const redisClient2 = redis.createClient({
    host: "ec2-3-17-205-16.us-east-2.compute.amazonaws.com",
    port: "6379"
});
const redisClient3 = redis.createClient({
    host: "ec2-18-188-169-60.us-east-2.compute.amazonaws.com",
    port: "6379"
});

const postgres = new Client({
    user: "postgres",
    // host: "ec2-3-14-133-172.us-east-2.compute.amazonaws.com", //1-Form-Database
    host: "ec2-3-134-98-30.us-east-2.compute.amazonaws.com", //2-Form-Database
    database: "formservice",
    password: "root"
});
postgres.connect();

function getAgent(agent, cb) {
    if (agent >= 7500000 && agent <= (7500000 + (833333 * 1))) {
        redisClient1.get(agent.toString(), (err, reply) => {
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
                            cb(null, res.rows[0]);
                            redisClient1.set(agent.toString(), JSON.stringify(res.rows[0]), (err, success) => {
                                if (err) {
                                    console.log('Redis set error', err)
                                }
                            })
                        };
                    });
                } else {
                    cb(null, JSON.parse(reply))
                }
            }
        })
    } else if (agent > (7500000 + (833333 * 1)) && agent <= (7500000 + (833333 * 2))) {
        redisClient2.get(agent.toString(), (err, reply) => {
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
                            cb(null, res.rows[0]);
                            redisClient2.set(agent.toString(), JSON.stringify(res.rows[0]), (err, success) => {
                                if (err) {
                                    console.log('Redis set error', err)
                                }
                            })
                        };
                    });
                } else {
                    cb(null, JSON.parse(reply))
                }
            }
        })
    } else if (agent > (7500000 + (833333 * 2)) && agent <= 10000000) {
        redisClient3.get(agent.toString(), (err, reply) => {
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
                            cb(null, res.rows[0]);
                            redisClient3.set(agent.toString(), JSON.stringify(res.rows[0]), (err, success) => {
                                if (err) {
                                    console.log('Redis set error', err)
                                }
                            })
                        };
                    });
                } else {
                    cb(null, JSON.parse(reply))
                }
            }
        })
    } else {
        cb('Out of bounds!', null)
    }
};

http.createServer(function (req, res) {
    if (req.method === 'GET') {
        if (req.url === `/loaderio-2a8a167d68cd7c32d8cbd0375cea696f`) {
            res.end('loaderio-2a8a167d68cd7c32d8cbd0375cea696f', 'utf-8');
            return
            // let verifyPath = path.join(__dirname, `loaderio-2a8a167d68cd7c32d8cbd0375cea696f`);
            // fs.readFile(verifyPath, (err, verifyFile) => {
            //     return;
            // });
        };
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
                let randomAgent = Math.floor(Math.random() * 2500000 + 7500000);
                getAgent(randomAgent, (err, data) => {
                    count++;
                    if (err) {
                        //Oops!
                    } else {
                        agents.push(data);
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
