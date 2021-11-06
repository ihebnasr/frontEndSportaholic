import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResevationComponent } from './add-resevation.component';

describe('AddResevationComponent', () => {
  let component: AddResevationComponent;
  let fixture: ComponentFixture<AddResevationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResevationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
