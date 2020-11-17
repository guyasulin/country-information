import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
	selector: 'app-country-search-result',
	templateUrl: './country-search-result.component.html',
	styleUrls: [ './country-search-result.component.scss' ],
	animations: [
		trigger('openItemAnimation', [
			transition('void => *', [
				animate(
					'1s',
					keyframes([
						style({
							opacity: 0,
							transform: 'translateY(500px)'
						}),
						style({
							opacity: 1,
							transform: 'translateY(0)'
						})
					])
				)
			])
		])
	]
})
export class CountrySearchResultComponent implements OnInit, AfterContentChecked {
	@Input() country: Country;
	public state: string;
	 public lat: number;
	 public lng: number;

	constructor() {}

	ngOnInit(): void {
	}

	ngAfterContentChecked() {
		this.lat = this.country.latlng[0] 
		this.lng = this.country.latlng[1] 
	}
}
