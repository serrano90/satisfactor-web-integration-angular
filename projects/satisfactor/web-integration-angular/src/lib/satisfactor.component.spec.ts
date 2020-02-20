import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactorComponent } from './satisfactor.component';

describe('SatisfactorComponent', () => {
  let component: SatisfactorComponent;
  let fixture: ComponentFixture<SatisfactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisfactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
