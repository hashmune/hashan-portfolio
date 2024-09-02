import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../shared/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProjectsComponent, 
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Hi';
  myName = 'Hashan';
}
