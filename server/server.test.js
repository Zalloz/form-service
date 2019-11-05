const axios = require('axios')

beforeEach(() => {

});

describe('Test the server', () => {
  test('It should respond to a get request', (done) => {
    return request(app).get("/agents").then(response => {
      console.log(response)
      done();
    });
  });
});