setInterval(() => {
    console.log('Ping')
}, 25000)

const redis = require('redis')

const redisClient = redis.createClient({
    host: "localhost", //ec2-52-15-70-152.us-east-2.compute.amazonaws.com
    port: "6379"
});

const agentTypes = ['listing', 'premier'];

let count = 0;

const dePopulate = async () => {
    for (let i = 7500000; i <= 10000000; i++) {
        const hGET = await new Promise((resolve, reject) => {
            redisClient.hdel(i.toString(), i.toString(), (err, response) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(response)
                }
            })
        })
        if (count % 10000 === 0) {
            console.log('Deleting hash#', count)
        }
    }
}
dePopulate()