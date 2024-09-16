import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My1minComponent } from './my1min.component';

describe('My1minComponent', () => {
  let component: My1minComponent;
  let fixture: ComponentFixture<My1minComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My1minComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My1minComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
