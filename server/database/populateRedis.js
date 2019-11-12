setInterval(() => {
    console.log('Ping')
}, 25000)

const faker = require('faker')
const redis = require('redis')

const redisClient = redis.createClient({
    host: "localhost", //ec2-52-15-70-152.us-east-2.compute.amazonaws.com
    port: "6379"
});

const agentTypes = ['listing', 'premier'];

let count = 0;

const populate = async () => {
    for (let i = 7500000; i <= 10000000; i++) {
        const hGET = await new Promise((resolve, reject) => {
            redisClient.hget(`${i}`, `${i}`, (err, response) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(response)
                }
            })
        })
        if (hGET === null) {
            count++
            if (count % 1000 === 0 || i === 10000000) {
                console.log(count, 'unset hashes.')
            }
            if (i % 10000 === 0) {
                console.log('On hash$:', i)
            }
            const agent_name = faker.name.firstName() + ' ' + faker.name.lastName();
            const recent_sales = faker.random.number({ min: 0, max: 30 });
            const phone = faker.phone.phoneNumber('###-###-####');
            const agent_type = agentTypes[faker.random.number({ min: 0, max: 1 })];
            const average_stars = faker.random.number({ min: 0, max: 5 });
            const num_ratings = faker.random.number({ min: 0, max: 500 });
            const agent_photo = `https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor${faker.random.number({ min: 1, max: 100 })}.jpg`;
            const obj = {
                agent_name,
                recent_sales,
                phone,
                agent_type,
                average_stars,
                num_ratings,
                agent_photo
            }
            await new Promise(resolve => redisClient.hset(`${i}`, `${i}`, JSON.stringify(obj), resolve));
        } else {
            console.log(hGET)
        }
    }
}
populate()