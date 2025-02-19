import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-quick-message-popup',
  imports: [SharedModule],
  templateUrl: './quick-message-popup.component.html',
  styleUrl: './quick-message-popup.component.scss'
})
export class QuickMessagePopupComponent {
  @Input() title:string = ''
  @Input() message:string = ''
  @Input() icon:string = ''
  @Input() styleClasses:string = ''
  @Input() acceptButtonText:string = ''
  @Input() acceptButtonStyleClasses:string = ''
  @Input() rejectButtonText:string = ''
  @Input() rejectButtonStyleClasses:string = ''
  @Output() acceptClick: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() rejectClick: EventEmitter<boolean> = new EventEmitter<boolean>()
}
