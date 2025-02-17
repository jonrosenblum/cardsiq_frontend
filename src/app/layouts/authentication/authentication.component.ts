import { Component, computed, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidePanelComponent } from '../../shared/components/auth/side-panel/side-panel.component';
import { FooterComponent } from '../../shared/components/auth/footer/footer.component';
import { FeatureFlagService } from '../../core/services/feature-flag.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [RouterOutlet, SharedModule, SidePanelComponent, FooterComponent],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
})
export class AuthenticationComponent {
  // inject services
  featureFlagService: FeatureFlagService = inject(FeatureFlagService);

  // sync value of footer flag
  isFooter: Signal<boolean> = computed(() => {
    return (
      this.featureFlagService.flags().find((flag) => flag.key === 'showFooter')
        ?.enabled ?? false
    );
  });
}
