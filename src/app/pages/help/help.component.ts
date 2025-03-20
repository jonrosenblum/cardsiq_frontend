import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {
  INewPageTemplate,
  NewPageTemplateComponent,
} from '../../shared/components/new-page-template/new-page-template.component';

@Component({
  selector: 'app-help',
  imports: [SharedModule, NewPageTemplateComponent],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss',
})
export class HelpPageComponent {
  pageContent: INewPageTemplate = {
    title: 'Help',
    description: 'This is the help page.',
    acceptButtonLabel: 'Go to Previous Page',
  };
}
