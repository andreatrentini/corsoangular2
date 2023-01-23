import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { EditorProfiloComponent } from './editor-profilo/editor-profilo.component';
import { EditorProfiloFbComponent } from './editor-profilo-fb/editor-profilo-fb.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    EditorProfiloComponent,
    EditorProfiloFbComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
