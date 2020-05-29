var mqtt = require('mqtt')
// require('./mqttClient');
// require('./webduino-all')

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://127.0.0.1')

client.on('connect', function () {
  client.subscribe('oase')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})