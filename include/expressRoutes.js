const
    express = require('express'),
    routers = express.Router(),
    {test} = require('./crawlData'),
    app = express()

const request = require('request');
const {render} = require("ejs");


// app.use(express.static(__dirname + '/assets'));


routers.get('/', (req, res) => {

    let data1
    getRequest('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2020-04-01T00:00:00Z').then(function (body1) {
        data1 = body1
        return getRequest('https://api.covid19api.com/summary');
    }).then(function (data2) {
        res.render('home', {
            data1: data1,
            data2: data2
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
