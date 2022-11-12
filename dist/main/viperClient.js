"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const logger_1 = require("@ayanaware/logger");
class atlasClient {
    constructor(options = {
        auth: "",
        botID: ""
    }) {
        this.apiKey = options.auth;
        this.botID = options.botID;
    }
    ;
    async post(servers, shards) {
        if (!this.apiKey)
            throw new ReferenceError('[Viper API] Missing API Token. Please provide a valid token!');
        if (!this.botID)
            throw new ReferenceError('[Viper API] Missing Bot ID, Please provide a valid Bot ID!');
        if (!servers)
            servers = 0;
        if (!shards)
            shards = 0;
        await (0, node_fetch_1.default)(`https://api.vipercord.com/stats/${this.botID}`, {
            method: "POST",
            headers: {
                "Authorization": `${this.apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                servers: servers
            })
        });
    }
    ;
    viperLogs(text) {
        if (!text)
            text = "[Viper API] Ready to Post Stats";
        var viperLogs = logger_1.Logger.get();
        viperLogs.info(`${text}`);
    }
    ;
}
exports.default = atlasClient;
;
