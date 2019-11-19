(async function () {

    var light;
    
    
    light = false;
    document.getElementById('demo-area-02-light').className = 'off';
    
    var webduinoMQTTClient = new webduino.module.mqttClient();
    
    await webduinoMQTTClient.connect({ server: 'wss://ae3ea8e1.ngrok.io/mqtt' });
    
    await webduinoMQTTClient.subscribe('fml');
    
    webduinoMQTTClient.on('message', async (mqttData) => {
      if (mqttData.payloadString == 'off') {
        document.getElementById('demo-area-02-light').className = 'off';
        light = false;
      }
      if (mqttData.payloadString == 'on') {
        document.getElementById('demo-area-02-light').className = 'on';
        light = true;
      }
    });
    document.getElementById('demo-area-02-light').addEventListener('click', async function () {
      if (light == false) {
        light = true;
        document.getElementById('demo-area-02-light').className = 'on';
    
        webduinoMQTTClient.send({
          topic: 'fml',
          message: 'on'
        });
      } else {
        light = false;
        document.getElementById('demo-area-02-light').className = 'off';
    
        webduinoMQTTClient.send({
          topic: 'fml',
          message: 'off'
        });
      }
    });
    
    }());