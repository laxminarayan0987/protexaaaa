import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { internship } from '../../../../assets/configurations/internships'

@Component({
  selector: 'app-training-internship',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './training-internship.component.html',
  styleUrl: './training-internship.component.css'
})
export class TrainingInternshipComponent {
  public courceDetails = internship;
  public cardClass = "";
  constructor() {
    const numberOfCources = this.courceDetails.length;
    if (numberOfCources <= 3) {
      this.cardClass = "col-md-" + (12/numberOfCources)
    }
    else this.cardClass = "col-xl-4 col-lg-6 col-md-6";
  }
}
