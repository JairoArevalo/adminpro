import { Component, OnInit } from '@angular/core';

declare function initPluggins();

@Component({
  selector: 'app-nofound',
  templateUrl: './nofound.component.html',
  styleUrls: ['./nofound.component.css']
})
export class NofoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initPluggins();
  }

}
