const mosca = require('mosca');
const config=require('./config/config');

const wsPort = 8883;
const tcpPort = 1883; //mqtt 1883
const MqttWsServer = new mosca.Server({
    port:tcpPort,
    http: {
        port: wsPort,
        bundle: true,
        static: './'
    }
});

// 監聽連接
MqttWsServer.on("clientConnected", (client)=> console.log("connecting clientId:",client.id));
MqttWsServer.on('ready', setup);
MqttWsServer.on("published", (packet,client) => {
    if(client){
        console.log('ws:'+client.id + '發佈主題:' + packet.topic + ',內容:' + packet.payload.toString());
    }
});
// Accepts the connection if the username and password are valid
var authenticate = function(client, username, password, callback) {
    console.log(username,password.toString())
    var authorized = (username === config.wsUsername && password.toString() === config.wsPassword);
    if (authorized) client.user = username;
    callback(null, authorized);
  }
  function setup() {
    console.log("mqtt is running at ws://localhost:%s,tcp://localhost:%s,wss://localhost:3004", wsPort,tcpPort)
    MqttWsServer.authenticate = authenticate;
  }

