const mqtt = require('mqtt');
require('dotenv').config();

const clientId = 'mqttws_' + Math.random().toString(16).substr(2, 8)
const host = 'wss://58.114.96.96/mqtt'
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
    username: 'publicuser',
    password: 'Id0K5fHBy65p',
    rejectUnauthorized: false
}

var client = mqtt.connect(host, options)

client.on('error', function (err) {
    console.log(err)
    client.end()
})

client.on('connect', function () {
    client.publish('oase', 'on', { qos: 0, retain: false })
    console.log('client connected:' + clientId)
    // client.end()
})




client.on('close', function () {
    console.log(clientId + ' disconnected')
})