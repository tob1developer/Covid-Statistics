const http = require('http')
const express = require('express')
const app = express();

const hostName = '0.0.0.0'
const port = 3000






// const server = http.createServer(((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('hello world')
// }))
//
// server.listen(port, hostName, () => {
//     console.log(`serrver ruung ${hostName} ${port}`)
// })



app.listen(port)
app.set('view engine', 'ejs');
app.set('views','./assets/views');
app.use(require('./include/expressRoutes'));
app.use(express.static(__dirname + '/assets/views/'));
