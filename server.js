const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes)

app.listen(PORT, function () {
    console.log(`App listening on Port: ${PORT}`);
});