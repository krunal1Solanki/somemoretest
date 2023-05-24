require('./Db.js')
const express = require('express');
const { config } = require('process');
const Data = require('./Data')
const app = express();
require("dotenv").config();
app.post("/postdata", async (req, res) => {

    const info = new Data({
        cartItems : req.body
    }).save()

    res.send({
        message : "success"
    })
});


app.get("/", (req, res) => {
    res.send({
        message : "ok"
    })
})


app.listen(process.env.PORT || 3000, ()=> {
    console.log("server running ", process.env.PORT)
})