import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SubHeaderComponent } from '../../shared/components/dashboard/sub-header/sub-header.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonUtils, redirectTo } from '../../shared/common-utils';
import { ACCOUNT_SETTING_TABS } from '../../shared/constant';
import { IAccountSettingTab } from '../../shared/interfaces/AccountSettingTab';

@Component({
  selector: 'app-account-setting',
  imports: [RouterOutlet, SubHeaderComponent, SharedModule],
  templateUrl: './account-setting.component.html',
  styleUrl: './account-setting.component.scss',
})
export class AccountSettingComponent {
  accountSettingTabs: IAccountSettingTab[] = ACCOUNT_SETTING_TABS;

  commonUtils: CommonUtils = inject(CommonUtils);
  router: Router = inject(Router);

  constructor() {
    // active the tab on refresh
    const routeUrl = this.router.url;
    routeUrl.split('/').forEach((url) => {
      const tab = this.accountSettingTabs.find(
        (tab) => this.commonUtils.convertLabelToPath(tab.label) === url,
      );
      if (tab) {
        this.onTabSection(tab);
      }
    });
    this.accountSettingTabs = ACCOUNT_SETTING_TABS;
  }

  onTabSection(selectedTab: IAccountSettingTab) {
    this.accountSettingTabs.forEach((tab) => (tab.active = false));
    selectedTab.active = true;
    redirectTo(
      this.router,
      '/settings/' + this.commonUtils.convertLabelToPath(selectedTab.label),
    );
  }
}
