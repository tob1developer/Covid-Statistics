const
    express = require('express'),
    routers = express.Router(),
    {test} = require('./crawlData')

const request = require('request');





routers.get('/home', (req, res) => {


    let options = {
    'method': 'GET',
    'url': 'https://api.covid19api.com/countries',
    'headers': {
    }
};
    request(options, function (error, response) {
        if (error) throw new Error(error);
        // console.log(response.body);
        res.render('home', {
            data: response.body
        });
    });
});

routers.get('/path_1',(req, res) => {

})

routers.get('/path_2',(req, res) => {

})

routers.get('/path_3', (req, res) => {

})

routers.get('/path_4', (req, res) => {

})

module.exports = routers;
