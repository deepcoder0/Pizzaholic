const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');

const PORT = process.env.PORT || 3000

//Assets
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home') // file_name inside views.
})

app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

app.listen(PORT , () => {
    console.log('Listening on port 3000');
})
