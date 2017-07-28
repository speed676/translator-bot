let TranslationValidator = {
	validate: function (TJSON) {
	
		if (typeof TJSON !== 'object') 
			return {success: false, message: "No es un formato JSON válido."};

		// if ( ! TJSON.hasOwnProperty('text') )//|| 
			// ! TJSON.hasOwnProperty('buttons') ||
			// ! TJSON.hasOwnProperty('images')) 
		// 		return {success: false, message: "El objeto no tiene la propiedad 'images'."};

		return {success: true};
	
	}
}
module.exports = TranslationValidator;

