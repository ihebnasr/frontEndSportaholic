import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStadeComponent } from './update-stade.component';

describe('UpdateStadeComponent', () => {
  let component: UpdateStadeComponent;
  let fixture: ComponentFixture<UpdateStadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
