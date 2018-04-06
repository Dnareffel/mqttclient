
var mqtt = require('mqtt');
var options = {
    port: 13874,
    host: 'mqtt://m23.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'zpcenzqr',
    password: 'RCsbcxnDE1_a',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQTT',
    protocolVersion: 4 ,

};
var client = mqtt.connect('mqtt://m23.cloudmqtt.com', options);

client.on('connect', function() { // When connected
    console.log('connected');
    // subscribe to a topic
    client.subscribe('tes/#', function() {
        // when a message arrives, do something with it
        client.on('message', function(topic, message, packet) {
            console.log("Received '" + message + "' on '" + topic + "'");
            
           
        });
    });

   
    // publish a message to a topic
    client.publish('tes', 'my message', function() {
        console.log("Message is published");
       // client.end(); // Close the connection when published
    });
});

 

