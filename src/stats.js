const getServerData = require("./getServerData")

async function requestServerStats(type, region, index) {
    switch (true) {
        case !type:
            // overall server stats
            return await getServerData(false)
            
        case type && !region:
            // type specific info (e.g. sandbox, dev, normal)
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
        case type && region && !index:
            // region info
            switch (type) {
                case "":
                case "normal":
                    // normal server info
                    break;

                case "sandbox":
                    // sandbox info
                    break;

                case "dev":
                    // dev info
                    break;
                default:
                    return {}
            }
            break;

        case type && region && index:
            // server of a type and region
            switch (type) {
                case "":
                case "normal":
                    // normal server info
                    break;

                case "sandbox":
                    // sandbox info
                    break;

                case "dev":
                    // dev info
                    break;
                default:
                    return {}
            }
            break;

        default:
            // invalid
            return {}
    }
}

module.exports = requestServerStats;