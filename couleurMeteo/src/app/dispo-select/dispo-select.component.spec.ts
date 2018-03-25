import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispoSelectComponent } from './dispo-select.component';

describe('DispoSelectComponent', () => {
  let component: DispoSelectComponent;
  let fixture: ComponentFixture<DispoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
