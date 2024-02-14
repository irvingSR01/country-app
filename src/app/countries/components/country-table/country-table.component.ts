import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryTableComponent { 

  @Input()
  public countries: Country[] = [];
  
}
