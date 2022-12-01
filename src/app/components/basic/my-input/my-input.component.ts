import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent {
  @Input() value!: string;
  @Input() label!: string;
  @Output() valueChange = new EventEmitter<string>();
}
