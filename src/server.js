const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')
var fm = require('front-matter');
var marked = require('marked');
var blogData;

app.get('/express', function(request, response) {
  const filePath = path.resolve(__dirname, '../build', 'index.html');
  const blogFilePath = path.resolve(__dirname, './blogs', '5-lessons-on-making-good-first-impressions.md')
  var md = require("markdown").markdown;
  fs.readFile(blogFilePath, { encoding: 'utf-8' }, function (err, data) {
      if (!err) {
        var blog = fm(data);
        blog.attributes.url = blogFilePath;
        blogData = blog;
      } else {
        console.log(err);
      }
   });
    
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    if(blogData){
      var blogMeta= blogData.attributes;
      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g,blogMeta.ogTitle);
      data = data.replace(/\$OG_DESCRIPTION/g, blogMeta.ogDescription);
      result = data.replace(/\$OG_IMAGE/g,blogMeta.ogImage);
      response.send(result);
    }
  });
});

app.get('/react', function(request, response) {
  const filePath = path.resolve(__dirname, '../build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'React');
    data = data.replace(/\$OG_DESCRIPTION/g, "Blog Factory | React");
    result = data.replace(/\$OG_IMAGE/g, 'https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png');
    response.send(result);
  });
});

app.get('/redux', function(request, response) {
  const filePath = path.resolve(__dirname, '../build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Redux');
    data = data.replace(/\$OG_DESCRIPTION/g, "Blog Factory | Redux");
    result = data.replace(/\$OG_IMAGE/g, 'https://i2.wp.com/blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png?fit=500%2C500');
    response.send(result);
  });
});

app.get('/node', function(request, response) {
    const filePath = path.resolve(__dirname, '../build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      data = data.replace(/\$OG_TITLE/g, 'Node Js');
      data = data.replace(/\$OG_DESCRIPTION/g, "Blog Factory | NodeJs");
      result = data.replace(/\$OG_IMAGE/g, 'https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png');
      response.send(result);
    });
  });
  

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, '../build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));


