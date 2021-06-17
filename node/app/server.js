const express = require('express');
const app = express();
const port = 3000;

const people = require('./src/people');



app.get('/', async (req, res) => {
    await people.create();
    await people.read(req, res)
});

app.listen(port, () => {
    console.log("Rodando na porta"+port)
})