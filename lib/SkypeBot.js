class SkypeBotTranslator {

  static translateToSystem(skypeMessage){
    return { 
      "idReceptor": skypeMessage.recipient.id, 
      "idCanal":  skypeMessage.channelId,
      "contenido": { 
        "texto":  skypeMessage.text, 
        "tipo":  (skypeMessage.type == 'message' ? 'text' : skypeMessage.type)
      }
    };
  }

  static translateToBot(genericMessage) {
    return { 
            "type": (genericMessage.contenido.tipo == 'text' ? 'message' : genericMessage.tipo),
            "id": "bf3cc9a2f5de...",
            "timestamp": "2016-10-19T20:17:52.2891902Z",
            "serviceUrl": "https://smba.trafficmanager.net/apis",
            "channelId": genericMessage.idCanal,
            "from": { 
                "id": "1234abcd",
                "name": "user's name"
            },
            "conversation": {
                "id": "abcd1234",
                "name": "conversation's name"
            },
            "recipient": {
                "id": genericMessage.idReceptor,
                "name": "bot's name"
            },
            "text": genericMessage.contenido.texto
        };
  }

}

module.exports = SkypeBotTranslator;