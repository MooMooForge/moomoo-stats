const MooMooStats = require("./src/stats");

(async() => {
    let data = await MooMooStats("normal")
    console.log(data)
})()

