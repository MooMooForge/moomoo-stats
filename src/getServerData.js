const axios = require("axios");

async function getServerData(type) {
    return new Promise(async (resolve, reject) => {
        switch (type) {
            case "":
            case "normal": {
                let rawdata = await axios.get("https://moomoo.io/serverdata")
                if (rawdata.status == 200) {
                    resolve(rawdata.data);
                } else {
                    reject(rawdata.status)
                }
                break;
            }
                

            case "sandbox": {
                // sandbox info
                let rawdata = await axios.get("https://sandbox.moomoo.io/serverData");
                if (rawdata.status == 200) {
                    resolve(rawdata.data);
                } else {
                    reject(rawdata.status)
                }
                break;
            }

            case "dev":
                // dev info
                let rawdata = await axios.get("https://dev.moomoo.io/serverData");
                if (rawdata.status == 200) {
                    resolve(rawdata.data);
                } else {
                    reject(rawdata.status)
                }
                break;
            case false: {
                let normaldata = await axios.get("https://moomoo.io/serverdata");
                let sandboxdata = await axios.get("https://sandbox.moomoo.io/serverData");
                let devdata = await axios.get("https://dev.moomoo.io/serverData");

                let servers = {
                    normal: normaldata.data.servers,
                    sandbox: sandboxdata.data.servers,
                    dev: devdata.data.servers
                }
                console.log("done!")
                return resolve(servers)
            }
        }
    })
}

module.exports = getServerData