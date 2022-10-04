const express = require('express');
const path = require('path');

const app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

require('./routes/api_route')(app);
require('./routes/html_route')(app);

app.listen(PORT, function() {
    console.log(`App listening on Port: ${PORT}`);
});