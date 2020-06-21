import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPageComponent } from './creation-page.component';

describe('CreationPageComponent', () => {
  let component: CreationPageComponent;
  let fixture: ComponentFixture<CreationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
