const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        result: "Hello World!"
    });
});

app.get('/version', (req, res) => {
    res.send({
        result: "success",
        data: {
            appVersion: "1.1"
        }
    });
});

app.listen(3000, () => {
    console.log('Server Ready');
});