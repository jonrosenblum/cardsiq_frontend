// DialogBoxService.service.ts
import { Injectable, ComponentRef, Injector, ApplicationRef, ComponentFactoryResolver, Type } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DialogBoxService {
  private popupRef?: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  open<T>(component: Type<T>, data?: any): ComponentRef<T> {
    if (this.popupRef) {
      this.close();
    }

    const factory = this.resolver.resolveComponentFactory(component);
    this.popupRef = factory.create(this.injector);

    if (data) {
      Object.assign(this.popupRef.instance, data);
    }

    this.appRef.attachView(this.popupRef.hostView);
    document.body.appendChild(this.popupRef.location.nativeElement);

    return this.popupRef;
  }

  close(): void {
    if (this.popupRef) {
      this.appRef.detachView(this.popupRef.hostView);
      this.popupRef.destroy();
      this.popupRef = undefined;
    }
  }
}
