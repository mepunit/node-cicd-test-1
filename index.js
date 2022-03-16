const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        result: "Hello World!"
    });
});

app.listen(3000, () => {
    console.log('Server Ready');
});