import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ElveguidenComponent } from './projects/elveguiden/elveguiden.component';
import { UniDesignSystemComponent } from './projects/uni-design-system/uni-design-system.component';
import { UniMobileComponent } from './projects/uni-mobile/uni-mobile.component';
import { My1minComponent } from './projects/my1min/my1min.component';

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
    },
    {
        path: 'projects/elveguiden',
        title: 'Elveguiden',
        component: ElveguidenComponent,
    },
    {
        path: 'projects/uni-design-system',
        title: 'Unimicro design system',
        component: UniDesignSystemComponent,
    },
    {
        path: 'projects/uni-mobile',
        title: 'Unimicro mobile',
        component: UniMobileComponent,
    },
    {
        path: 'projects/my1min',
        title: 'My1Min',
        component: My1minComponent,
    },

];
