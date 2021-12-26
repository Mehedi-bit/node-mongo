const express = require('express');


const app = express();

app.get('/', (req, res) => {
    fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit);
})

app.get('/fruits/banana', (req, res) => {
    res.send({name: 'banana', id: 1, class: 'sagor kola', quantity: 1000, price: 50000});
})

const users = ['Emon', 'Tapu', 'Sunny', 'Hridoy', 'Nisar'];

app.get('/users/:id', (req, res) => {
    console.log(req.params)
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});       // will return an object in json format  (api)
    console.log(name);
})

app.listen(4080, console.log("Listening to port 4080"));