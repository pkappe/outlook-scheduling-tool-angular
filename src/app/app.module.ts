import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RoomsComponent } from './rooms.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, RoomsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
