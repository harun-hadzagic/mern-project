const express = require("express");
const bodyParser = require("body-parser");
const placesRouter = require("./routes/places-routes");

const app = express()

app.use("/api/places", placesRouter)

app.use((error, req, res, next)=>{
    if(res.headerSent){
        return next(error)
    }
    res.status(error.code || 500).json({message: error.message || "An unknown error has occured"})
})

app.listen(8000)