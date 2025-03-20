import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  INewPageTemplate,
  NewPageTemplateComponent,
} from '../../shared/components/new-page-template/new-page-template.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterModule, NewPageTemplateComponent],
  template: `
    <app-new-page-template [content]="pageContent"></app-new-page-template>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class Notfound {
  location: Location = inject(Location);
  pageContent: INewPageTemplate = {
    code: '404',
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    acceptButtonLabel: 'Go to Previous Page',
    acceptButtonAction: () => this.location.back(),
  };
}
