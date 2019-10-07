
const request = require('request');
const cheerio = require('cheerio');
var express = require('express');
var fs = require('fs');

var port = 8081;
var app = express();


app.get('/twitter', function(req, res){
var URL = "https://twitter.com/search?q=in%20autumn&src=typed_query";
request(URL, function (err, res, body, html) {
   // if(err){
   //    console.log("an error occured : " + err);
   // }
   // else{
   //    console.log("It was a success.")
   // }

   var $ = cheerio.load(html);
      var data = {
        articleTitle:'',
        articleImage: '',
        articleParagraph: ''
      }

      $('#content').filter(function(){
        data.articleImage = $(this).find('img').attr('src');
      });

   fs.writeFile('twitter-output.js', JSON.stringify(data, null, 4), function(error){
    console.log('File written on hard drive!');

  });
});
});
