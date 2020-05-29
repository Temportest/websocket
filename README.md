## Nginx Setting
執行nginx
```bash
nginx
```
停止nginx
```bash
nginx -s stop
```
開啟資料夾
```bash
open /usr/local/etc/nginx/
```

## issue
- 1883 port for MQTT
- 8883 for WebSocket/HTTP
- 8884 for WSS/HTTPS

```
wss://127.0.0.1/mqtt  或是  wss://127.0.0.1:8884    
ws://127.0.0.1:8883
http://127.0.0.1:1883  或是 mqtt://127.0.0.1
```



## Reference
- [NGINX 設定 HTTPS 網頁加密連線](https://blog.gtwang.org/linux/nginx-create-and-install-ssl-certificate-on-ubuntu-linux/)
- [nodejs版mqtt](https://www.twblogs.net/a/5bc0f3e92b717711c9241068)
- [MQTT介紹](https://www.twblogs.net/a/5db43a54bd9eee310ee6b811)
- [ActorCloud](https://docs.actorcloud.io/zh/)
- [MQTT基本應用](https://www.twblogs.net/a/5db43a54bd9eee310ee6b811)
- [MQTT協議](https://www.twblogs.net/a/5db49906bd9eee310ee6bae1)

- [Web:Bit](https://webbit.webduino.io/blockly/?demo=default#lRQ2LLN26jDqG)
- [Kebbi version](https://testkebbi.webduino.tw/blockly/?demo=default#a355aaKKjOm3m)