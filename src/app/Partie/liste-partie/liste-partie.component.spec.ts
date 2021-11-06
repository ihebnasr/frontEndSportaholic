import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePartieComponent } from './liste-partie.component';

describe('ListePartieComponent', () => {
  let component: ListePartieComponent;
  let fixture: ComponentFixture<ListePartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
