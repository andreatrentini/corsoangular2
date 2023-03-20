import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditComponent } from './edit/edit.component';

// definire i percorsi dell'applicazione

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'primo', component: PrimoComponent }, 
  { path: 'secondo', component: SecondoComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrimoComponent,
    SecondoComponent,
    NotFoundComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,

    // Importo il modulo per gestire il router, forRoot mi consente di configurare
    // il menu principale, forChild i sotto menu, 
    // come parametro specifico la costante definita sopra con l'elenco dei percorsi

    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
