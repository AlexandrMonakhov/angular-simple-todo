import { Component, OnInit } from '@angular/core';

import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [];
	currentPost: Post | any = null;
	isEditModalVisible = false;

	ngOnInit() {
		this.posts = this.getPostsFromLocalStorage();
	}

	addNewPost(post: Post) {
		post.id = this.generateRandomId();

		this.posts.unshift(post);

		this.setPostsToLocalStorage(this.posts);
	}

	getPostsFromLocalStorage() {
		return JSON.parse(localStorage.getItem('posts')!) || [];
	}

	setPostsToLocalStorage(posts: Post[]) {
		localStorage.setItem('posts', JSON.stringify(posts));
	}

	generateRandomId() {
		return Math.floor(Math.random() * 1000000);
	}

	onSavePost(post: Post) {
		const updatedPosts = this.updatePosts(post);

		this.setPostsToLocalStorage(updatedPosts);

		this.isEditModalVisible = false;
	}

	onCloseModal(post: Post) {
		this.currentPost = post;
		this.isEditModalVisible = false;
	}

	onClickDeletePost(post: Post) {
		const index = this.getPostIndex(post);

		this.posts.splice(index, 1);

		this.setPostsToLocalStorage(this.posts);
	}

	onClickEditPost(post: Post) {
		this.currentPost = this.getPost(post);

		this.isEditModalVisible = true;
	}

	updatePosts(post: Post) {
		this.currentPost = post;

		const updatedPosts = [...this.posts].map((post: Post) => {
			if (post.id === this.currentPost.id) {
				post.title = this.currentPost.title;
				post.text = this.currentPost.text;
			}

			return post;
		});

		return updatedPosts;
	}

	getPostIndex(post: Post) {
		const currentPost = post;

		return this.posts.findIndex((post) => post.title === currentPost.title);
	}

	getPost(post: Post) {
		const currentPost = post;

		return this.posts.find((post) => post.title === currentPost.title);
	}
}
