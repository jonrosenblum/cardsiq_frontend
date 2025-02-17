import { Component } from '@angular/core';
import { FeatureFlagService } from '../../core/services/feature-flag.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-feature-permissions',
  imports: [SharedModule],
  templateUrl: './feature-permissions.component.html',
  styleUrl: './feature-permissions.component.scss',
})
export class FeaturePermissionsComponent {
  constructor(public featureFlagService: FeatureFlagService) {}

  toggleFeature(key: string): void {
    this.featureFlagService.toggleFeature(key);
  }
}
