


// let options = {
//     'method': 'GET',
//     'url': 'https://api.covid19api.com/countries',
//     'headers': {
//     }
// };
// request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
// });


function test() {
    const request = require('request');
    var data = "test"
    let options = {
        'method': 'GET',
        'url': 'https://api.covid19api.com/countries',
        'headers': {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log("inside body");
        // console.log(response.body)
        data = response.body
        // return response.body
    });
    return data
}


module.exports = {
    test : test
}
