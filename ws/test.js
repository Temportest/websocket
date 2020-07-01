const mqtt = require('mqtt');
const config=require('./config/config');

const clientId = 'mqttws_' + Math.random().toString(16).substr(2, 8)
const host = config.wsHost
// const host='http://127.0.0.1:1883'
// const host='mqtt://127.0.0.1' // when tcpPort=1883
var options = {
    keepalive: 60,
    clientId: clientId,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
    },
    username: config.wsUsername,
    password: config.wsPassword,
    rejectUnauthorized: false
}

var client = mqtt.connect(host, options)

client.on('error', function (err) {
    console.log(err)
    client.end()
})

client.on('connect', function () {
    client.publish('fml', '0.666666667,	0.26984127,	0.48029	,0.5303	,0.8571	,0.8571	,0.79823	,0.2038', { qos: 0, retain: false })
    console.log('client connected:' + clientId)
    
    setTimeout(()=>{client.end()}, 1000);
})




client.on('close', function () {
    console.log(clientId + ' disconnected')
})