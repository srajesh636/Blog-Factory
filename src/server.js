const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

app.get('/express', function(request, response) {
  console.log('Home page visited!');
  const filePath = path.resolve(__dirname, '../build', 'index.html');
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, 'Express');
    data = data.replace(/\$OG_DESCRIPTION/g, "Blog Factory | Express");
    result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    response.send(result);
  });
});

app.get('/react', function(request, response) {
  console.log('About page visited!');
  const filePath = path.resolve(__dirname, '../build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'React');
    data = data.replace(/\$OG_DESCRIPTION/g, "Blog Factory | React");
    result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    response.send(result);
  });
});

app.get('/redux', function(request, response) {
  console.log('Contact page visited!');
  const filePath = path.resolve(__dirname, '../build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Redux');
    data = data.replace(/\$OG_DESCRIPTION/g, "Blog Factory | Redux");
    result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    response.send(result);
  });
});

app.get('/node', function(request, response) {
    console.log('Contact page visited!');
    const filePath = path.resolve(__dirname, '../build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      data = data.replace(/\$OG_TITLE/g, 'Node Js');
      data = data.replace(/\$OG_DESCRIPTION/g, "Blog Factory | NodeJs");
      result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
      response.send(result);
    });
  });
  

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, '../build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));