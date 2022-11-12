# Vipercord (Node-SDK)

<hr />

## Install
```diff
npm i @vipercord/viper.js

or

npm i @vipercord/viper.js@latest
```

<hr />

## Usage
```js
const { ViperClient } = require("@vipercord/viper.js");

const viper = new ViperClient({
    auth: "Api key",
    botID: "Bot id"
});

viper.post(SERVER_COUNT,);
viper.log("Some Log Text so you know it Worked");
```

<hr />

## Example
```js
const { ViperClient } = require("@vipercord/viper.js");

const viper = new ViperClient({
    auth: "AUTH_TOKEN", 
    botID: "819050202508890419"
});

viper.post(client.guilds.cache.size, 0).catch((err) => {
viper.viperLogs(`Posting Stats has failed | Error: ${err}`);
});

viper.viperLogs("Posted Stats Successfully");
```

<hr />
