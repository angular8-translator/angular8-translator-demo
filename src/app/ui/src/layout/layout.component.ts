import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-layout',  // tslint:disable-line: component-selector
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
