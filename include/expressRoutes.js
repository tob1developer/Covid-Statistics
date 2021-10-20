const
    express = require('express'),
    routers = express.Router(),
    {test} = require('./crawlData'),
    app = express()

const request = require('request');
const {render} = require("ejs");


// app.use(express.static(__dirname + '/assets'));


routers.get('/', (req, res) => {


    // let options = {
    // 'method': 'GET',
    // 'url': 'https://api.covid19api.com/countries',
    // 'headers': {
    // }
    // };
    // request(options, function (error, response) {
    //     if (error) throw new Error(error);
    //     // console.log(response.body);
    //     res.render('home', {
    //         data: response.body
    //     });
    // });

    res.render('home')
});

routers.get('/path_1',(req, res) => {
    res.render('page1')
})

routers.get('/path_2',(req, res) => {
    res.render('page2')
})

routers.get('/path_3', (req, res) => {
    res.render('page3')
})

routers.get('/path_4', (req, res) => {
    res.render('page4')
})
routers.get('/path_5', (req, res) => {
    res.render('page5')
})
routers.get('/path_6', (req, res) => {
    res.render('page6')
})

module.exports = routers;
