import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePermissionsComponent } from './feature-permissions.component';

describe('FeaturePermissionsComponent', () => {
  let component: FeaturePermissionsComponent;
  let fixture: ComponentFixture<FeaturePermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePermissionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
