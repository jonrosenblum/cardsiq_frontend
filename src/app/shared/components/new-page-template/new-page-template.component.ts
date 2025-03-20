import { Component, inject, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Location } from '@angular/common';

export interface INewPageTemplate {
  title: string;
  description: string;
  code?: string;
  acceptButtonLabel?: string;
  acceptButtonAction?: () => void;
  rejectButtonLabel?: string;
  rejectButtonAction?: () => void;
}

@Component({
  selector: 'app-new-page-template',
  templateUrl: './new-page-template.component.html',
  styleUrls: ['./new-page-template.component.scss'],
  imports: [SharedModule],
})
export class NewPageTemplateComponent {
  @Input() content!: INewPageTemplate;

  location: Location = inject(Location);

  acceptAction(): void {
    if (this.content.acceptButtonAction) {
      this.content.acceptButtonAction();
      return;
    }
    this.location.back();
  }
}
