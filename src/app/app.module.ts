import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
