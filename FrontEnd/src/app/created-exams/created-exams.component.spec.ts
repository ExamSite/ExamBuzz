import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedExamsComponent } from './created-exams.component';

describe('CreatedExamsComponent', () => {
  let component: CreatedExamsComponent;
  let fixture: ComponentFixture<CreatedExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
