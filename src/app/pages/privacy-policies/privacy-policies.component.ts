import { Component } from '@angular/core';
import {
  INewPageTemplate,
  NewPageTemplateComponent,
} from '../../shared/components/new-page-template/new-page-template.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-privacy-policies',
  imports: [SharedModule, NewPageTemplateComponent],
  templateUrl: './privacy-policies.component.html',
  styleUrl: './privacy-policies.component.scss',
})
export class PrivacyPoliciesComponent {
  pageContent: INewPageTemplate = {
    title: 'Privacy Policies',
    description: 'This is the privacy policies page.',
    acceptButtonLabel: 'Go to Previous Page',
  };
}
