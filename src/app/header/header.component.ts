import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileMenuActive: boolean = false;
  
  toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }
}
