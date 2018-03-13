import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: ['./animation.ts'],
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
