import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPartieUserComponent } from './list-partie-user.component';

describe('ListPartieUserComponent', () => {
  let component: ListPartieUserComponent;
  let fixture: ComponentFixture<ListPartieUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPartieUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPartieUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
