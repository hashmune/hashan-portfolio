import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElveguidenComponent } from './elveguiden.component';

describe('ElveguidenComponent', () => {
  let component: ElveguidenComponent;
  let fixture: ComponentFixture<ElveguidenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElveguidenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElveguidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
