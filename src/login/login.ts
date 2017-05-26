import {Component} from "@angular/core";
import {AuthHelper} from "../authHelper/authHelper";

@Component({
    selector: "login"

})

export class Login {

  private authHelper: AuthHelper;
  constructor(auth:AuthHelper){
    this.authHelper = auth;
  }

  login(){
    this.authHelper.login;
  }
}
