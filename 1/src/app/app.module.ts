import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task04Component } from './task04/task04.component';
import { SearchPipe } from './task04/search.pipe';
import { SortPipe } from './task04/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Task04Component,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }