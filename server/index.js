//Imports of libraries
const express = require('express');
const path = require('path');

//App configurations
let app = express();
const port = process.env.PORT || 3333;

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use(express.static('build'));
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname + '/..' + '/public/index.html'));
});

app.listen(port, () => {console.log(`Server is running on port: ${port}`);});
