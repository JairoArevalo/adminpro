import { Component, OnInit } from '@angular/core';



declare function initPluggins();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initPluggins();
  }

}
