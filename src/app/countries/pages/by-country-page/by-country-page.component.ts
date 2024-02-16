import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    CountryTableComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
  ],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countryService: CountryService) { }

  searchByCountry(term: string) {
    this.isLoading = true;
    this.countryService.searchCountry(term)
      .subscribe(countries => {
        this.isLoading = false;
        return this.countries = countries
      })
  }
}
