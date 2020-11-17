import { Component, Input, OnInit } from '@angular/core';
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
export class CountrySearchResultComponent implements OnInit {
	@Input() country: Country;
	public state: string;

	constructor() {}

	ngOnInit(): void {}
}
