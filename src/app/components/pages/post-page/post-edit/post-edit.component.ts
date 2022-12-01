import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from 'interfaces/Post';

@Component({
  selector: 'post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
	@Input() currentPost!: Post;

	@Output() clickSaveButton = new EventEmitter<Post>();
	@Output() clickCancelButton = new EventEmitter<any>();

	copyCurrentPost: Post | any = null;

	ngOnInit() {
		this.copyCurrentPost = {...this.currentPost};
	}

	onClickCancelButton() {
		this.clickCancelButton.emit({
			title: this.currentPost.title,
			text: this.currentPost.text,
		});
	}

	onClickSaveButton(post: Post) {
		this.clickSaveButton.emit(post);
	}
}
