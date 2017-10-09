

module.exports = {	
	translateToSystem: function (kikMessage) {
		let mensajeTraducido = { 
		      "idReceptor": kikMessage.to, 
		      "idCanal":  kikMessage.chatId, 
		      "mensaje": { 
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
	},


	translateToBot: function (genericMessage) {

		let mensajeTraducido = {
			"chatId": genericMessage.idCanal,
	        "type": "text",
	        "to": genericMessage.idReceptor,
	        "text": genericMessage.mensaje.texto
		};
		
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