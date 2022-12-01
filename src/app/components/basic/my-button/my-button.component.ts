import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent {
	@Output() click = new EventEmitter<any>();

	@Input() iconOnly:boolean = false;
}
