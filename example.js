const MooMooStats = require("./src/stats");

(async() => {
    let data = await MooMooStats("normal", 39)
    console.log(data)
})()

