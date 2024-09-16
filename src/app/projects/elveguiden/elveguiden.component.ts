import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-elveguiden',
  standalone: true,
  imports: [ ButtonModule ],
  templateUrl: './elveguiden.component.html',
  styleUrl: './elveguiden.component.scss'
})
export class ElveguidenComponent {

  constructor (
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }
}
