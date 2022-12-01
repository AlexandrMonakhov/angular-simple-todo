import { Component, Output, EventEmitter } from '@angular/core';

import { Post } from 'interfaces/Post';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
	title = '';
	text = '';

	@Output() onClickPostButton = new EventEmitter<Post>();

	onClickButton() {
		if (this.isPostValid(this.title, this.text)) {
			this.onClickPostButton.emit(this.createPost(this.title, this.text));

			this.clearForm();
		}
	}

	isPostValid(title: string, text: string) {
		return Boolean(title.trim() && text.trim());
	}

	createPost(title: string, text: string) {
		return {
			title,
			text,
		};
	}

	clearForm() {
		this.title = '';
		this.text = '';
	}
}
