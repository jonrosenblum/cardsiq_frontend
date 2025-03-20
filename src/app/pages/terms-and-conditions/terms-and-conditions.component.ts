import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {
  INewPageTemplate,
  NewPageTemplateComponent,
} from '../../shared/components/new-page-template/new-page-template.component';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [SharedModule, NewPageTemplateComponent],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.scss',
})
export class TermsAndConditionsComponent {
  pageContent: INewPageTemplate = {
    title: 'Terms and Conditions',
    description: 'This is the terms and conditions page.',
    acceptButtonLabel: 'Go to Previous Page',
  };
}
