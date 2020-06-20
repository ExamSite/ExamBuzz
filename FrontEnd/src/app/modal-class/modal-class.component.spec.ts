import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClassComponent } from './modal-class.component';

describe('ModalClassComponent', () => {
  let component: ModalClassComponent;
  let fixture: ComponentFixture<ModalClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
