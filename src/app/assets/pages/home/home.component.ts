import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { internship } from '../../../../assets/configurations/internships'
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../services/common/global.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/CS.jpg',
    'assets/images/AI.jpg',
    'assets/images/AI2.png'
  ];

  currentIndex: number = 0;
  intervalId: any;
  public internships = internship;

  constructor(public globalService: GlobalService) { }

ngOnInit(): void {
  this.startInterval();
}
startInterval() {
  this.intervalId = setInterval(() => {
    this.nextImage();
  }, 4000);
}
nextImage(): void {
  if (this.currentIndex < this.images.length - 1) {
    this.currentIndex++;
  } else {
    this.currentIndex = 0;
  }
}

prevImage(): void {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  } else {
    this.currentIndex = this.images.length - 1;
  }
}
  ngOnDestroy(): void {
    // Clean up the interval when the component is destroyed to avoid memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
