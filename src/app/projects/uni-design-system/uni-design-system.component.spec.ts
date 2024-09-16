import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniDesignSystemComponent } from './uni-design-system.component';

describe('UniDesignSystemComponent', () => {
  let component: UniDesignSystemComponent;
  let fixture: ComponentFixture<UniDesignSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniDesignSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
