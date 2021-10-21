const
    express = require('express'),
    routers = express.Router(),
    {test} = require('./crawlData'),
    app = express()

const request = require('request');
const {render} = require("ejs");


// app.use(express.static(__dirname + '/assets'));


routers.get('/', (req, res) => {


    getRequest('https://api.covid19api.com/summary').then(function (body) {
        res.render('home', {
            data: body,

        });
    })

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


function getRequest(url){
    return new Promise(function (success, failure) {
        request(url, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                success(body);
            } else {
                failure(error);
            }
        });
    });
}

module.exports = routers;
