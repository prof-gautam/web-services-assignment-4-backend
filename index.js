// importing necessary library
const express = require("express")
const https = require("https")
const fs = require("fs")
const cors = require('cors');
require("dotenv").config()

//local module
const mySettings = require('./routes/mySettings')

//Setting express server
const app = express()
app.use(cors({
    origin: 'http://localhost:3000'
  }));
const httpsOptions = {
  //ssl path
  key: fs.readFileSync("./ssl/key.pem"),
  cert: fs.readFileSync("./ssl/cert.pem"),
}

// now creating server using https
const server = https.createServer(httpsOptions, app)
app.use(express.json())
app.use("/api/v1", mySettings)

//listening to server
const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`)
})


// https://food.wl-food.com/api/app/settings