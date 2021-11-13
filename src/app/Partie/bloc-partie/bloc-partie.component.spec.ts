import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocPartieComponent } from './bloc-partie.component';

describe('BlocPartieComponent', () => {
  let component: BlocPartieComponent;
  let fixture: ComponentFixture<BlocPartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocPartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocPartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
