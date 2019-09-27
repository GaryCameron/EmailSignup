const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const { runQuery, addEmail } = require("./app");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Server up on 3000');
});

app.get("/data", async (req, res) => {
    const data = await runQuery();

    console.log(data);
    res.send({
        data: data[0].total
    });
});

app.post('/register', (req, res) => {
    addEmail(req.body.email);
    console.timeLog(req.body);
    res.send('POST request to homepage');
});