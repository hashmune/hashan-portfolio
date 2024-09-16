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
      route: '/projects/elveguiden',
      imageSrc: 'elveguiden-thumbnail.png',
      title: 'Elveguiden',
      description:
        'Salmon fishing is a deeply ingrained and popular activity in the Scandinavian region, especially in Norway. See how we enhanced the experience of Elveguiden mobile app for salmon fishing enthusiasts',
    },
    {
      id: 2,
      route: '/projects/uni-design-system',
      imageSrc: 'unimicro-thumbnail.png',
      title: 'Unimicro design system',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      route: '/projects/uni-mobile',
      imageSrc: 'uni-mobile-thumbnail.png',
      title: 'Unimicro time registering',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      route: 'projects/my1min',
      imageSrc: 'my1min-thumbnail.png',
      title: 'My1Min',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];
}
