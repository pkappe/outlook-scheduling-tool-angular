import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router} from "@angular/router";
import {AppComponent} from "./app.component";

import { Login } from "./login/login";
import { Files } from "./files/files";
import {AuthHelper} from "./authHelper/authHelper";
import {LocationStrategy} from "@angular/common";
import {HashLocationStrategy} from "@angular/common";
//import {Http, HttpModule} from '@angular/http';
//import {ModuleWithProviders} from "@angular/core";
//import {CanDeactivateGuard} from "./can-deactivate-guard";
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

const appRoutes: Routes = [
  {component: Login, path: '/login'},
  {component: Files, path:'/files'}
]

@NgModule({
 imports : [
   RouterModule
 ],
  exports: [
    RouterModule
  ],
  //bootstrap: [AppModule],

  providers: [ AuthHelper]
//    {provide: LocationStrategy, useClass: HashLocationStrategy}
//  ]
})

export class AppRoutingModule{
//  static forRoot(): ModuleWithProviders{
//    console.log("running");
//    return {ngModule: AppRoutingModule}
//  }
  constructor(router: Router, auth: AuthHelper){

    if (auth.access_token !== null){
      router.navigate(["/files"]);
    } else {
      router.navigate(["/login"]);
    }
  }

}
