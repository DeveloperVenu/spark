import { Component,ElementRef,HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'VENU OTT';

  navbg: any;
  @HostListener('document:scroll') scrollover() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': '#000000',
      };
    } else {
      this.navbg = {};
    }
  }

  constructor(private router: Router) {}
  handleButtonClick(event: MouseEvent, button: HTMLButtonElement): void {
    event.preventDefault();
    if (!button.classList.contains('delete')) {
      button.classList.add('delete');
      setTimeout(() => button.classList.remove('delete'), 3200);
    }
  }
}
