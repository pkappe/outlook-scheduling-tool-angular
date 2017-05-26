import { AppComponent} from "./app.component";
import {NgModule } from "@angular/core";
import {BrowserModule } from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
//import {AppRoutingModule} from "./app-routing.module";
import {Routes, Router} from "@angular/router";

const appRoutes: Routes = [

]

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {

    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  } }
