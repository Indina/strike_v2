import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Profile } from "../../model/profile";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {


  userId:string;
  profile:Profile;

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

}
