let assert = require('assert');
let kik = require("../lib/KikBot");
let validador = require("../lib/TJSONValidator");

describe('TEST', function() {
  	describe('All platforms', function() {

      let jsonKik = {
        "chatId": "001",
        "type": "text",
        "to": "001",
        "text": "hola mundo",
        "buttons": [
          {
            "type": "default",
            "title": "boton1",
            "value": "1"
          },
          {
            "type": "default",
            "title": "boton2",
            "value": "2"
          }
        ]
      };

      let jsonGenerico = { 
          "idReceptor": "001", 
          "idCanal": "001", 
          "mensaje": { 
            "text": "hola mundo", 
            "type": "text"
          },
          "buttons": [{
            "title": "boton1"
          },
          {
            "title": "boton2"
          }]
        };

      // let traducidoABot = kik.translateToSystem(jsonGenerico);

      // let traducidoASystem = kik.translateToBot(jsonKik);

      it('validar objeto JSONKIK:', function(){

        assert.equal(true, validador.validate(jsonKik).success);
      });
      it('validar objeto jsonGenerico:', function(){
        assert.equal(true, validador.validate(jsonGenerico).success);
        
      });

      // it('Traducir a lenguage de KIK:', function(){
      //   assert.deepEqual(jsonKik, traducidoABot);
      // });

      // it('Traducir de KIK a lenguaje generico:', function(){
      //   assert.deepEqual(jsonKik, traducidoABot);
      // });

    });
});