import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePartieComponent } from './update-partie.component';

describe('UpdatePartieComponent', () => {
  let component: UpdatePartieComponent;
  let fixture: ComponentFixture<UpdatePartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
