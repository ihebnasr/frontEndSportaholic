import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserNotEnableComponent } from './list-user-not-enable.component';

describe('ListUserNotEnableComponent', () => {
  let component: ListUserNotEnableComponent;
  let fixture: ComponentFixture<ListUserNotEnableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserNotEnableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserNotEnableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
