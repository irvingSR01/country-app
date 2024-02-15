import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountryService {

	private apiURL: string = 'https://restcountries.com/v3.1/'

	constructor(private http: HttpClient) { }

	searchCountryByAlphaCode(term: string): Observable<Country | null> {
		const url = `${this.apiURL}/alpha/${term}`;
		return this.http.get<Country[]>(url)
			.pipe(
				map(countries => countries.length > 0 ? countries[0] : null),
				catchError(error => {
					// aqui podemos tratar el error
					return of(null)
				})
			);
	}

	searchCapital(term: string): Observable<Country[]> {
		const url = `${this.apiURL}/capital/${term}`;
		return this.http.get<Country[]>(url)
			.pipe(
				catchError(error => {
					// aqui podemos tratar el error
					return of([])
				})
			);
	}

	searchCountry(term: string): Observable<Country[]> {
		const url = `${this.apiURL}/name/${term}`;
		return this.http.get<Country[]>(url)
			.pipe(
				catchError(error => {
					return of([])
				})
			)
	}

	searchRegion(term: string): Observable<Country[]> {
		const url = `${this.apiURL}/region/${term}`;
		return this.http.get<Country[]>(url)
			.pipe(
				catchError(error => {
					return of([])
				})
			)
	}

}