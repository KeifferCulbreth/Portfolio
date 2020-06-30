import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAccordianComponent } from './about-accordian.component';

describe('AboutAccordianComponent', () => {
  let component: AboutAccordianComponent;
  let fixture: ComponentFixture<AboutAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
