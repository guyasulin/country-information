import { CountryService } from './../services/country.service';
import { Country } from '../models/country';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit, OnDestroy {
  
  public myControl = new FormControl();
  public countries : Country[];
  public countrySelected: Country = null;
  public filteredCountries: Observable<Country[]>;
  public sub: Subscription

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
     this.sub = this.countryService.getCountries().subscribe(res => {
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
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe()
  }
}
