import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../shared/contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProjectsComponent, 
    ContactComponent,
    FeedbackComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Hi';
  myName = 'Hashan';
}
