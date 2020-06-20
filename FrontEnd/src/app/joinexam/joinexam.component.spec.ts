import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinexamComponent } from './joinexam.component';

describe('JoinexamComponent', () => {
  let component: JoinexamComponent;
  let fixture: ComponentFixture<JoinexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
