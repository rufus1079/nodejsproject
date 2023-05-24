const express = require('express');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    //middlewarestuff
},(req, res, err) => {
    //handler
})


// ROUTER.HTTPVERB(URL_PATH, MIDDLEWARE_FUNCTION, HANDLER_FUNCTION)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const http = require('node:http');
// http.createServer((request, response) => {
    
//     // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
//     response.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });

//     // 2. Write the announced text to the body of the page
//     response.write('Hello, World!\n');

//     // 3. Tell the server that all of the response headers and body have been sent
//     response.end();

// }).listen(1337);