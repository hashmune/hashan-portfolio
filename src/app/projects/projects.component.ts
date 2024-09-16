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
      imageSrc: 'elveguiden-thumbnail.png',
      title: 'Elveguiden',
      description: 'Description for project 1',
    },
    {
      id: 2,
      imageSrc: 'unimicro-thumbnail.png',
      title: 'Unimicro design system',
      description: 'Description for project 2',
    },
    {
      id: 3,
      imageSrc: 'uni-mobile-thumbnail.png',
      title: 'Unimicro mobile application',
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
