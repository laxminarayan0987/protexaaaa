import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navMenuVisible: boolean = false;

  constructor() { }

  setnavMenuVisible(value: boolean): void {
    this.navMenuVisible = value;
  }

  getnavMenuVisible(): boolean {
    return this.navMenuVisible;
  }
}
