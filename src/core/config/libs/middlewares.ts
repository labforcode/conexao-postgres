import bodyParser from 'body-parser';

class Middlewares {

	public parser: any;

	constructor() {
		this.config();
	}

	private config(): void{
		this.parser = bodyParser.json();
	}
}

export default new Middlewares().parser;

