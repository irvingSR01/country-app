import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
