let assert = require('assert');
let SkypeBotTranslator = require("../lib/SkypeBot");

describe('TEST', function() {
    describe('Skype plattform', function() {

      let jsonSkype = { 
            "type": "message",
            "id": "bf3cc9a2f5de...",
            "timestamp": "2016-10-19T20:17:52.2891902Z",
            "serviceUrl": "https://smba.trafficmanager.net/apis",
            "channelId": "001",
            "from": { 
                "id": "1234abcd",
                "name": "user's name"
            },
            "conversation": {
                "id": "abcd1234",
                "name": "conversation's name"
            },
            "recipient": {
                "id": "001",
                "name": "bot's name"
            },
            "text": "hola mundo"
        };

        let jsonGenerico = { 
            "idReceptor": "001", 
            "idCanal": "001", 
            "contenido": { 
              "texto": "hola mundo", 
              "tipo": "text"
            }
        };

        let traducidoASystem = SkypeBotTranslator.translateToSystem(jsonSkype);

        let traducidoABot = SkypeBotTranslator.translateToBot(jsonGenerico);

        it('Traducir a lenguage de Skype:', function(){
            assert.deepEqual(jsonGenerico, traducidoASystem);
        });

        it('Traducir de Skype a lenguaje generico:', function(){
            assert.deepEqual(jsonSkype, traducidoABot);
        });

    });
});