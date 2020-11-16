import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-country-search-result',
  templateUrl: './country-search-result.component.html',
  styleUrls: ['./country-search-result.component.scss']
})
export class CountrySearchResultComponent implements OnInit {

  @Input() country: Country;
  
  constructor() { }

  ngOnInit(): void {
  }

}
