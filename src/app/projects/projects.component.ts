import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      imageSrc: 'sample-image.png',
      title: 'Project 1',
      description: 'Description for project 1',
    },
    {
      id: 2,
      imageSrc: 'sample-image.png',
      title: 'Project 2',
      description: 'Description for project 2',
    },
    {
      id: 3,
      imageSrc: 'sample-image.png',
      title: 'Project 3',
      description: 'Description for project 3',
    },
    {
      id: 4,
      imageSrc: 'sample-image.png',
      title: 'Project 4',
      description: 'Description for project 4',
    }
  ];
}
