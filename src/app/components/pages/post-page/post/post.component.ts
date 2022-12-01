import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from 'interfaces/Post'

@Component({
	selector: 'post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
})
export class PostComponent {
	@Input() post!: Post;

	@Output() clickEditButton = new EventEmitter<any>();
	@Output() clickDeleteButton = new EventEmitter<any>();
}
