const express = require('express');
const path = require('path');
const { runQuery, addEmail } = require("./app");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
    console.log('Server up on 3000');
});

app.get("/data", async (req, res) => {
    const data = await runQuery();

    console.log(data);
    res.send({
        data: data
    });
});