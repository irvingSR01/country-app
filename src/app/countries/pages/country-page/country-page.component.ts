import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesServide: CountryService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesServide.searchCountryByAlphaCode(id)),
      )
      .subscribe(country => {
        if ( !country ) return this.router.navigateByUrl('')

        return this.country = country;
        // return;
      });
  }
}
