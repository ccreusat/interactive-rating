import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrls: ['./rating-component.component.css'],
})
export class RatingComponentComponent implements OnInit {
  @Input() error: boolean = false;
  @Input() choice: number = 0;

  VALUES: number[] = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}

  updateValue(value: number) {
    console.log(value);
    this.choice = value;
  }
}
