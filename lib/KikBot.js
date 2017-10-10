class KikBotTranslator {	
	static translateToSystem(kikMessage) {
		let mensajeTraducido = { 
	      "idReceptor": kikMessage.to, 
	      "idCanal":  kikMessage.chatId, 
	      "contenido": { 
	        "texto":  kikMessage.text, 
	        "tipo":  kikMessage.type
	      }
	    };

	    if (kikMessage.hasOwnProperty('buttons')) {
	      let botonesTraducidos = [];
	      kikMessage.buttons.forEach((button) => {
	        let botonTraducido = {
	          "titulo": button.title
	        };
	        botonesTraducidos.push(botonTraducido);
	      });

	      mensajeTraducido.botones = botonesTraducidos;
	    }

	    return mensajeTraducido;
	}

	static translateToBot(genericMessage) {
		let mensajeTraducido = { 
			_state: {
				type: 'text',
				 body: genericMessage.contenido.texto
			}
		};
		// {
		// 	"chatId": genericMessage.idCanal,
	 //        "type": "text",
	 //        "to": genericMessage.idReceptor,
	 //        "text": 
		// };
		
		let botonesTraducidos = [];
		if (genericMessage.hasOwnProperty('botones')) {
			
			let i=1;
			genericMessage.botones.forEach((botones) => {
				let botonTraducido = {
					"type": "default",
					"title": botones.titulo,
					"value": i
				};
				i++;
			botonesTraducidos.push(botonTraducido);
			});
		}

		mensajeTraducido.buttons = botonesTraducidos;

		return mensajeTraducido;
	}
}

module.exports = KikBotTranslator;