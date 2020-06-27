import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedPapersComponent } from './joined-papers.component';

describe('JoinedPapersComponent', () => {
  let component: JoinedPapersComponent;
  let fixture: ComponentFixture<JoinedPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinedPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
