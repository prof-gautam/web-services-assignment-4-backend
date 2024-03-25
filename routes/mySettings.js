const express = require("express")
const axios = require("axios")
const useragent = require("express-useragent")

//local modules
myLogger = require("../utils/logger")

const mySetting = express.Router()
mySetting.use(useragent.express())

mySetting.post("/api/settings", async (req, res) => {
  try {
    const ip = req.ip || req.remoteAddress
    const deviceInfo = `${req.useragent.platform} | ${req.useragent.browser} | ${req.useragent.version} | ${req.useragent.os}`
    
    // Fetch settings from the provided URL
    const response = await axios.get(process.env.GITHUB_SETTING)
    const settings = response.data

    // filtering app colors and app name only
    const filteredSettings = {
      colors: settings.colors,
      appName: settings.strings.app_name,
    }
    
    myLogger.info('Setting api  utilized', { ip, device: deviceInfo });
    res.json(filteredSettings)
  } catch (error) {
    console.error("Error fetching settings:", error)
    res.status(500).send("Internal Server Error")
  }
})

module.exports = mySetting
