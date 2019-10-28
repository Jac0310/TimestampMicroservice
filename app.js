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

app.get("/api/hello", function (req, res) {
    res.json({greeting: 'hello API'});
});

