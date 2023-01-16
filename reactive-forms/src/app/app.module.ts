import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { EditorProfiloComponent } from './editor-profilo/editor-profilo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    EditorProfiloComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
