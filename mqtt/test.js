var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1')

client.on('connect', function () {
  console.log('成功連接')
  client.subscribe('#', function (err) {
    if (!err) {
      client.publish('oase', 'on');
      console.log('send');
      client.end()
    }
  })
})