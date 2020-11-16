import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }


  getCountries():Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe(
      map(res => res)
    )
  }
}
