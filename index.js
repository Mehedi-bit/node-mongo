const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send("I know how to open Node. Thank you for calling me... YAY");
})

app.listen(8080, console.log("Listening to port 8080"));