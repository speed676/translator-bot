let assert = require('assert');
let KikBotTranslator = require("../lib/KikBot");
let validador = require("../lib/TJSONValidator");

describe('TEST', function() {
  	describe('KikBot test', function() {

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
          "contenido": { 
              "texto": "hola mundo", 
              "tipo": "text"
          },
          "botones": [{
              "titulo": "boton1"
          },
          {
              "titulo": "boton2"
          }]
      };

      let traducidoKikGenerico = KikBotTranslator.translateToSystem(jsonKik);

      let traducidoGenericoKik = KikBotTranslator.translateToBot(jsonGenerico);

      it('validar objeto JSONKIK:', function(){
        assert.equal(true, validador.validate(jsonKik).success);
      });

      it('validar objeto jsonGenerico:', function(){
        assert.equal(true, validador.validate(jsonGenerico).success);
      });

      it('Traducir de Kik a generico:', function(){
         assert.deepEqual(jsonGenerico, traducidoKikGenerico);
       });

      it('Traducir de generico a Kik:', function(){
        assert.deepEqual(jsonKik, traducidoGenericoKik);
      });

    });

});