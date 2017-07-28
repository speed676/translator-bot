

module.exports = {	
	translateToSystem: function (target) {
		let jsonKik = 
		{
	        "chatId": "001",
	        "type": "text",
	        "to": "001",
	        "text": "hola mundo",
	        "buttons": 
        	[
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


		return jsonKik;
	},
	translateToBot: function (target){
		let jsonGenerico = 
			{ 
				"idReceptor": "001", 
				"idCanal": "001", 
				"mensaje": { 
				"text": "hola mundo", 
				"type": "text"
			},
				"buttons": 
					[
						{
							"title": "boton1"
						},
						{
							"title": "boton2"
						}
					]
			};

		return jsonGenerico;
	}

}
