import {Bot} from "../interface/Bot";

class KikBot //implements Bot 
{
	
	myjson:any;

	constructor(argument) {
		this.myjson = {"hola": "mundo"};
	}

	translateToSystem(target: any): JSON{
		return this.myjson;	
	}

	translateToBot(target){
		// TODO
	}

}