export class Country {
    name?: string;
	capital?: string;
	languages?: Languages[];
	currencies?: Currencies[];
	timezones?: string[];
	borders?: string;
	flag?: string;
	population?:string;

	constructor(country?: Country) {
		this.name = country.name;
		this.capital = country.capital;
		this.languages = country.languages.map(x => x.name);
		this.currencies = country.currencies.map(x => x.name);
		this.timezones = country.timezones;
		this.borders = country.borders;
		this.flag = country.flag;
		this.population = country.population;
	}
}

class Languages {
	name:any;
}
class Currencies {
	name:any;
}