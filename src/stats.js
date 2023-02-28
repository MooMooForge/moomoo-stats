const getServerData = require("./getServerData")
/**
 * 
 * @param {String} type 
 * @param {Number} region 
 * @param {Number} index 
 * @returns Server info
 */
async function requestServerStats(type, region, index) {
    switch (true) {
        case !type:
            // overall server stats
            return await getServerData(false)

        case type && !region: {
            switch (type) {
                case "":
                case "normal":
                    return await getServerData("normal");

                case "sandbox":
                    return await getServerData("sandbox");

                case "dev":
                    return await getServerData("dev");

                default:
                    return {}
            }
        }
        case type && region && !index: {

            let serverInfo = await requestServerStats(type);
            let targetServers = [];
            for (let i = 0; i < serverInfo.length; i++) {
                let server = serverInfo[i];

                let serverRegion = server.region.match(/vultr:(\d+)/)[1]

                if (serverRegion == region) {
                    targetServers.push(server)
                }
            }
            return targetServers
        }
        
        default:
            if (type && region && index) {
                let serverStats = await requestServerStats(type, region)
                let targetServer = null;

                serverStats.forEach(function (server) {
                    if (server.index == index) {
                        targetServer = server;
                    }
                })
                return targetServer
            }
            return {}
    }
}

module.exports = requestServerStats;