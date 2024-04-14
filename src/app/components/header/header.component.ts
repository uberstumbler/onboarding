import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly router: Router = inject(Router);
  activeMenu: WritableSignal<string> = signal('');

  private routerEventSubscrition!: Subscription;

  ngOnInit(): void {
    this.routerEventSubscrition = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeMenu.set(this.router.url.split('/')[1]);
      }
    });
  }

  ngOnDestroy(): void {
    this.routerEventSubscrition && this.routerEventSubscrition.unsubscribe();
  }
}
