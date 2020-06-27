import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeUpdateProfileComponent } from './see-update-profile.component';

describe('SeeUpdateProfileComponent', () => {
  let component: SeeUpdateProfileComponent;
  let fixture: ComponentFixture<SeeUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
