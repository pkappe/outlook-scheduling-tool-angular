import {Component} from "@angular/core";
import {Http, Headers} from "@angular/http";

import {AuthHelper} from "../authHelper/authHelper";

@Component({
  selector: "files"
})

export class Files {
  private files:any = [];
  constructor(http:Http, authHelper:AuthHelper){
    http.get("https://graph.microsoft.com/v1.0/me/drive/root/children", {
      headers:new Headers({"Authorization" : "Bearer " + authHelper.access_token})
    })
    .subscribe(res =>{
      if(res.status === 200)
      this.files = res.json().value;
    else
        alert("Oops, something went wrong with your call to Microsoft Graph: " + res.status);
      }
    )
  }

}
