# moomoo-stats
a NPM package to request MooMoo.io Server stats

This package allows you to request stats such as player information, IP or if the server is private or not.

Examples:

```js
const ServerStats = require("moomoo-stats")

(async() => {
    let totalStats = ServerStats();
    /* returns an object:
        {
            dev: [array of all servers in dev.moomoo.io],
            normal: [array of all servers in moomoo.io],
            sandbox: [array of all servers in sandbox.moomoo.io]
        }
    */

   let sandboxStats = serverStats("sandbox");
   // returns an array with all servers in sandbox.moomoo.io

   let sandboxRegionStats = serverStats("normal", 39)
   // returns an array with all servers from moomoo.io in the region 39

   let serverSpecificStats = serverStats("normal", 39, 1)
   // returns a server object from the sevrer 39:1:0 on moomoo.io
})()
```

Created by [MooMooForge](https://github.com/MooMooForge)

Author: [Nuro](https://github.com/NuroC)