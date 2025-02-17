import { Injectable, signal, WritableSignal } from '@angular/core';

export interface FeatureFlag {
  name: string;
  key: string;
  enabled: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  private featureFlags: WritableSignal<FeatureFlag[]> = signal(
    this.loadFeatureFlags(),
  );

  // Getter for feature flags
  get flags(): WritableSignal<FeatureFlag[]> {
    return this.featureFlags;
  }

  // Toggle a specific feature flag
  toggleFeature(key: string): void {
    const updatedFlags = this.featureFlags().map((flag) =>
      flag.key === key ? { ...flag, enabled: !flag.enabled } : flag,
    );

    this.featureFlags.set(updatedFlags);
    this.saveFeatureFlags(updatedFlags);
  }

  // Load feature flags from Local Storage or set defaults
  private loadFeatureFlags(): FeatureFlag[] {
    const storedFlags = localStorage.getItem('featureFlags');
    return storedFlags ? JSON.parse(storedFlags) : this.getDefaultFlags();
  }

  // Save feature flags to Local Storage
  private saveFeatureFlags(flags: FeatureFlag[]): void {
    localStorage.setItem('featureFlags', JSON.stringify(flags));
  }

  // Default feature flags (extend as needed)
  private getDefaultFlags(): FeatureFlag[] {
    return [{ name: 'Show Footer', key: 'showFooter', enabled: true }];
  }
}
