import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './components/pages/post-page/post/post.component';
import { PostFormComponent } from './components/pages/post-page/post-form/post-form.component';
import { PostEmptyComponent } from './components/pages/post-page/post-empty/post-empty.component';
import { PostEditComponent } from './components/pages/post-page/post-edit/post-edit.component';
import { MyInputComponent } from './components/basic/my-input/my-input.component';
import { MyButtonComponent } from './components/basic/my-button/my-button.component';
import { ModalComponent } from './components/compounds/modal/modal.component';

@NgModule({
	declarations: [
		AppComponent,
		PostComponent,
		PostFormComponent,
		PostEmptyComponent,
		MyInputComponent,
		MyButtonComponent,
		ModalComponent,
	 	PostEditComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
