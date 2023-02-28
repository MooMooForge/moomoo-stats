const MooMooStats = require("./src/stats");

(async() => {
    let data = await MooMooStats("sandbox", 39)
      console.log(data)
})()

