const express = require("express"); 
const app = express(); 

app.get("/", (req, res) => {
    res.send("Olis, que cuentan? "); 
})

app.listen(8080);