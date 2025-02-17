import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  ms: MessageService = inject(MessageService);

  error(
    txt: string,
    title: string = 'Error',
    time: number = 2500,
    key: string = 'br',
  ): void {
    this.ms.add({
      key,
      severity: 'error',
      summary: title,
      detail: txt,
      life: time,
    });
  }

  success(
    txt: string,
    title: string = 'Success',
    time: number = 2500,
    key: string = 'br',
  ): void {
    this.ms.add({
      key,
      severity: 'success',
      summary: title,
      detail: txt,
      life: time,
    });
  }

  info(
    txt: string,
    title: string = 'Notification',
    time: number = 2500,
    key: string = 'br',
  ): void {
    this.ms.add({
      key,
      severity: 'info',
      summary: title,
      detail: txt,
      life: time,
    });
  }
}
