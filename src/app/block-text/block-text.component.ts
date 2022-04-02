import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-text',
  templateUrl: './block-text.component.html',
  styleUrls: ['./block-text.component.css'],
})
export class BlockTextComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
