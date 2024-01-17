const express = require("express");
const bodyParser = require("body-parser");
const placesRouter = require("./routes/places-routes");

const app = express()

app.use("/api/places", placesRouter)



app.listen(8000)