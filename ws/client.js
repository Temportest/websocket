const mqtt = require('mqtt');
const config=require('./config/config');

const clientId = 'mqttws_' + Math.random().toString(16).substr(2, 8)
const host = config.wsHost
// const host='ws://127.0.0.1:8001'

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
    console.log('client connected:' + clientId)
})

client.subscribe('fml', { qos: 0 })

client.on('message', function (topic, message, packet) {
    console.log('Received Message:' + message.toString() + '  On topic:= ' + topic)
})

client.on('close', function () {
    console.log(clientId + ' disconnected')
})