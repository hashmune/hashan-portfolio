import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniMobileComponent } from './uni-mobile.component';

describe('UniMobileComponent', () => {
  let component: UniMobileComponent;
  let fixture: ComponentFixture<UniMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
