import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistPage } from './page/todolist/todolist.page';
import { AzionicompletatePage } from './page/azionicompletate/azionicompletate.page';

@NgModule({
  declarations: [
    AppComponent,
    TodolistPage,
    AzionicompletatePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
