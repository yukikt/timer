import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  item = false;

  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.item = true;
  }

  closeMenu() {
    this.item = false;
  }

}
