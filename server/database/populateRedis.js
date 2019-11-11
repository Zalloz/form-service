const redis = require('redis')

const redisClient = redis.createClient({
    host: "ec2-52-15-70-152.us-east-2.compute.amazonaws.com",
    port: "6379"
});

redisClient.hset()

for (let i = 7500000; i < 10000000; i++) {
    const populate = async () => {
        const name = faker.name.firstName() + ' ' + faker.name.lastName();
        const sales = faker.random.number({ min: 0, max: 30 });
        const phone = faker.phone.phoneNumber('###-###-####');
        const type = agentTypes[faker.random.number({ min: 0, max: 1 })];
        const stars = faker.random.number({ min: 0, max: 5 });
        const ratings = faker.random.number({ min: 0, max: 500 });
        const photo = `https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor${faker.random.number({ min: 1, max: 100 })}.jpg`;
        const obj = {
            name,
            sales,
            phone,
            type,
            stars,
            ratings,
            photo
        }
        await new Promise(resolve => redisClient.hset(`${i}`, `${i}`, JSON.stringify(obj), resolve));
    }
    populate()
}