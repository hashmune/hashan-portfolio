import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main class="body-container">
      <div class="body-inner">
        <router-outlet></router-outlet>
      </div>
    </main>
    <app-footer></app-footer>
  `,
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
  ],
  styleUrl: './app.component.scss',
})
export class AppComponent {}
