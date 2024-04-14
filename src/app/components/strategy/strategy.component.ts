import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strategy',
  standalone: true,
  imports: [],
  templateUrl: './strategy.component.html',
  styleUrl: './strategy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrategyComponent {
  private readonly router: Router = inject(Router);

  navigateToOnboarding() {
    this.router.navigate(['/personal-detail']);
  }
}
