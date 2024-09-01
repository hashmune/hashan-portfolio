import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Hashan Nilupul | UX Designer',
        component: HomeComponent,
    },
    {
        path: 'projects',
        title: 'Hashan Nilupul | Projects',
        component: ProjectsComponent,
    },
    {
        path: 'about-me',
        title: 'Hashan Nilupul | About me',
        component: AboutMeComponent,
    }

];
