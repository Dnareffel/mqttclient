express = require('express'),
mqtt = require('mqtt'),
path = require('path'),
bodyParser = require('body-parser');
socketIO = require('socket.io');



var topic = 'tes';

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



  

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use('/', Routes);

const port = process.env.PORT || 4000;


const server = app.listen(port, function(){
console.log('Listening on port ' + port);
});

const io = socketIO(server);


io.on('connection',(socket) => {

    client.subscribe('tes/#', function() {
        // when a message arrives, do something with it
        client.on('message', function(topic, message, packet) {

           

            console.log("Received '" + message + "' on '" + topic + "'");
            socket.emit('hello',{
                
                    date: new Date(Date.now()).toLocaleString(),
                    message: message.toString()
                
            });
           
        });
    });
  
        
       
   
  
});



app.use(express.static(path.join(__dirname,'dist')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
})