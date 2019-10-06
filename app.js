var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

//Storing port number and our full app
var port = 8081;
var app = express();

app.get('/twitter', function(req, res){

const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  uri: 'https://twitter.com/search?q=murcia&src=typed_query',
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


    res.send(data);

  fs.writeFile('twitter-output.js', 'var twitter_list = [' + data +']', function(error){
    console.log('File written on hard drive!');

  });
}
});
//All the web scraping magic will happen here
//  res.send('Hello World!');

});

app.get('/wikipedia', function(req, res){

  var url = 'https://en.wikipedia.org/wiki/Quartz';

  request(url, function(error, response, html) {
    if(!error) {
      // res.send(html);
      var $ = cheerio.load(html);
      var data = {
        articleTitle:'',
        articleImage: '',
        articleParagraph: ''
      }

      $('#content').filter(function(){
        data.articleTitle = $(this).find('#firstHeading').text();
        data.articleImage = $(this).find('img').attr('src');
        data.articleParagraph = $(this).find('p:nth-of-type(2)').first().text();
      });

      res.send(data);

      fs.writeFile('wiki-output.js', JSON.stringify(data, null, 4), function(error){
        console.log('File written on hard drive!');

      });
    }
  });



//All the web scraping magic will happen here
//  res.send('Hello World!');

});

app.listen(port);
console.log('Magic happens on port' + port);

exports = module.exports = app;
