import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

@Component({
    selector: 'app-by-region-page',
    standalone: true,
    templateUrl: './by-region-page.component.html',
    styles: ``,
    imports: [
      SearchBoxComponent,
      CountryTableComponent,
      CommonModule,
      LoadingSpinnerComponent
    ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor(private countryService: CountryService) { }

  searchByRegion(term: Region) {
    this.isLoading = true;
    this.countryService.searchRegion(term)
    .subscribe(countries => {
      this.isLoading = false;
      return this.countries = countries
    })
    this.selectedRegion = term;
  }

}
