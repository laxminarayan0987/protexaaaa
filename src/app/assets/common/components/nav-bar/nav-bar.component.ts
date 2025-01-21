import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../../services/common/global.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router, private globalService: GlobalService) {}
  hidemenu: boolean = true;
  navigateTo (pageName: string) {
    this.hidemenu = true;
    this.router.navigate(['/'+pageName]);
  }
  toggleNavMenu() {
    this.hidemenu = !this.hidemenu;
    this.globalService.setnavMenuVisible(!this.hidemenu)
  }
}
