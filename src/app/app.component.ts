import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconsService } from './core/services/icons.service';
import { SharedModule } from './shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';
import { PopupBackdropComponent } from './shared/components/popup-backdrop/popup-backdrop.component';
// import {
//   DialogBoxService,
//   PopupState,
// } from './core/services/dialogbox.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, ToastModule, PopupBackdropComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService, AuthGuard, LoginGuard],
})
export class AppComponent {
  iconsService: IconsService = inject(IconsService);
  // popupState: PopupState | null = null;
  // private popupSubscription!: Subscription; // ✅ Subscription for cleanup

  // constructor(
  //   private dialogBoxService: DialogBoxService,
  //   private injector: Injector,
  // ) {
  //   // ✅ Subscribe to popup state changes
  //   this.popupSubscription = this.dialogBoxService
  //     .getPopupState()
  //     .subscribe((state) => {
  //       this.popupState = state;
  //     });
  // }

  // createInjector(data: any) {
  //   return Injector.create({
  //     providers: [{ provide: 'POPUP_DATA', useValue: data }],
  //     parent: this.injector,
  //   });
  // }

  // ngOnDestroy() {
  //   this.popupSubscription.unsubscribe(); // ✅ Clean up subscription
  // }
}
