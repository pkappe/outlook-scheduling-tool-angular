import {Injectable} from "@angular/core";
import {constants} from "../constants/constants";

@Injectable()
export class AuthHelper {
  private parseQueryString = function(url:String){
    var params = {}, queryString = url.substring(1),
    regex = /([^&=]+)=([^&]*)/g, m;
		while (m = regex.exec(queryString)) {
			params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
		}
		return params;

    }
    private params = this.parseQueryString(location.hash);
    public access_token: string = null;

    constructor(){
      if(this.params["id_token"] != null){
        this.getAccessToken();
      } else if (this.params["access_token"] != null){
        this.access_token = this.params["access_token"];
      }
    }

    getAccessToken(){
      window.location.href = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=" + constants.CLIENT_ID + "&redirect_uri=" + encodeURIComponent(window.location.href) + "&response_type=code&state=1234&scope=" + constants.SCOPE;
    }

    login(){
      window.location.href = "https://login.microsoftonline.com/" +
      			"/oauth2/authorize?response_type=id_token&client_id=" + constants.CLIENT_ID +
      			"&redirect_uri=" + encodeURIComponent(window.location.href) +
      			"&state=SomeState&nonce=SomeNonce";
    }

}
