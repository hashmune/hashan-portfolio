import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  emoji = '👋';
  email = 'hashan.nilupul@live.com';

  openEmailClient() {
    const predefinedEmail = this.email;
    const subject = 'Project collaboration inquiry'; 
    const body = 'Hello Hashan...';

    const mailtoLink = `mailto:${predefinedEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }
}
