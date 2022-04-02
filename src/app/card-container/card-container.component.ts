import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent implements OnInit {
  @Input() className: string = '';
  constructor() {}

  ngOnInit(): void {
    console.log(this.className);
  }
}
