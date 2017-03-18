import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'cag-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  private sidebarCollapsed: boolean = true;
  private headerExploded: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((route) => {
      this.headerExploded = (route.url === '/');
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (this.router.url !== '/')
      return;

    let quarterHeight = window.innerHeight / 4;
    this.headerExploded = (window.scrollY <= quarterHeight);
  }

  toggleCollapse(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
