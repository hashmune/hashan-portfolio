import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
 @Input() imageSrc: string = '';
 @Input() title: string = '';
 @Input() description: string = '';
 @Input() routerLink: string = ''; 
} 
