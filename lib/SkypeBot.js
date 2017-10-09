module.exports = {
  translateToSystem: function (skypeMessage){
    return { 
      "idReceptor": skypeMessage.recipient.id, 
      "idCanal":  skypeMessage.channelId,
      "mensaje": { 
        "texto":  skypeMessage.text, 
        "tipo":  (skypeMessage.type == 'message' ? 'text' : skypeMessage.type)
      }
    };
  },
  translateToBot: function (genericMessage) {
    return { 
            "type": (genericMessage.mensaje.tipo == 'text' ? 'message' : genericMessage.tipo),
            "id": "bf3cc9a2f5de...",
            "timestamp": new Date().toISOString(),
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
            "text": genericMessage.mensaje.texto
        };
  }
}