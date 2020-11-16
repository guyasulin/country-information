import { CountryService } from './../services/country.service';
import { Country } from '../models/country';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {
  
  public myControl = new FormControl();
  public countries : Country[];
  public countrySelected: Country = null;
  public filteredCountries: Observable<Country[]>;
  
  constructor(private countryService: CountryService,private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.countryService.getCountries().subscribe(res => {
      this.countries = res;
     })

     this.filteredCountries = this.myControl.valueChanges
     .pipe(
       startWith(''),
       map(value => typeof value === 'string' ? value : value.name),
       map(name => name ? this._filter(name) : null)
     );
  }

  displayFn(val: Country): string {
    return val && val.name ? val.name : '';
  }

  private _filter(name: string): Country[] {
    const filterValue = name.toLowerCase();

    return this.countries.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  optionSelected(country: Country) {
    this.countrySelected = new Country(country);
    console.log(  this.countrySelected);
    console.log(this.route);
    
  }
}
