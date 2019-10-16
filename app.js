// requirejs.config({
//     baseUrl: 'node_modules',
//     paths: {
//         app: '../app'
//     }
// });
//
// // Start loading the main app file. Put all of
// // your application logic in there.
// requirejs(['app/server']);


const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + '/views/index.html');
// });




// app.get(/[\s\S]*/, function (req, res) {
//     var url = require('url');
//     var url_parts = url.parse(req.url, true);
//     var query = url_parts.query;
//     var date = new Date(query.toString);
//     res.json({"unix": date.getTime(), "utc" : date.toUTCString() });
//     res.send(req.query)
// });

app.get('/:date_string?', function (req, res) {

    // var date = new Date(query.toString);
    // res.json({"unix": date.getTime(), "utc" : date.toUTCString() });
    var dateString = req.params["date_string"];
    var date;
    if (dateString)
    {
        date = new Date(dateString);
    }
    else
    {
        date = new Date();
    }
    res.send(res.json({"unix": date.getTime(), "utc" : date.toUTCString() }))
});

/[\s\S]*/

// your first API endpoint...
app.get("/api/hello", function (req, res) {
    res.json({greeting: 'hello API'});
});

//http://localhost:3000/
//
// // listen for requests :)
// var listener = app.listen(process.env.PORT, function () {
//     console.log('Your app is listening on port ' + listener.address().port);
// });