import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPartieVUserComponent } from './list-partie-vuser.component';

describe('ListPartieVUserComponent', () => {
  let component: ListPartieVUserComponent;
  let fixture: ComponentFixture<ListPartieVUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPartieVUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPartieVUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
