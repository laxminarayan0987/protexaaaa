import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingInternshipComponent } from './training-internship.component';

describe('TrainingInternshipComponent', () => {
  let component: TrainingInternshipComponent;
  let fixture: ComponentFixture<TrainingInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingInternshipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
