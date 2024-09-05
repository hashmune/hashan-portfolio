import { Component, Renderer2, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
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
export class AppComponent implements AfterViewInit, OnDestroy {
  private mobileMenu: HTMLElement | null = null;
  private mobileMenuObserver: MutationObserver;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.mobileMenuObserver = new MutationObserver(() => this.checkMenuStatus());
  }

  ngAfterViewInit() {
    this.mobileMenu = this.elRef.nativeElement.querySelector('.mobile-menu');
    if (this.mobileMenu) {
      this.mobileMenuObserver.observe(this.mobileMenu, { attributes: true });
    }
  }

  ngOnDestroy() {
    this.mobileMenuObserver.disconnect();
  }

  checkMenuStatus() {
    if (this.mobileMenu?.classList.contains('show-menu')) {
      this.renderer.addClass(this.elRef.nativeElement, 'overflow-hidden');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'overflow-hidden');
    }
  }
}
