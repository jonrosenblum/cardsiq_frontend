import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconsService } from './core/services/icons.service';
import { SharedModule } from './shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService],
})
export class AppComponent {
  iconsService: IconsService = inject(IconsService);
}
