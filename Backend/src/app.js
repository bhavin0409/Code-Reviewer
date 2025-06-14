const express = require('express')
const app = express()
require("dotenv").config()
const aiRoutes = require("./routes/ai.route")

app.use(express.json())

app.get("/" , (req , res) => {
    res.send("hello World")
})

app.use("/ai" , aiRoutes)

module.exports = app