const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  uri: `https://www.yourURLhere.com`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(OPTIONS)
    .then(function (data) {
        // REQUEST SUCCEEDED: DO SOMETHING
    })
    .catch(function (err) {
        // REQUEST FAILED: ERROR OF SOME KIND
    });
