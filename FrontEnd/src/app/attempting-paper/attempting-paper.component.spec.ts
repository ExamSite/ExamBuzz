import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptingPaperComponent } from './attempting-paper.component';

describe('AttemptingPaperComponent', () => {
  let component: AttemptingPaperComponent;
  let fixture: ComponentFixture<AttemptingPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttemptingPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptingPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
