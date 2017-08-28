import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "../../model/user";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as Firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  state:Observable<Firebase.User>;
  error : any;
  isLoggedIn:boolean;

  constructor(private afAuth :AngularFireAuth, public http: Http) {

    this.state = afAuth.authState;




  }



  loginWithEmailAndPassword(user:User){
     return this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password).
      then((success)=>{
          this.isLoggedIn=true;
          //should also return the actual member data then return success to login page
          return this.isLoggedIn;
      }).
      catch(
      (err)=>{
        console.log(err);
        this.error = err;
        return err;
      });
  }


  register(user:User){

  }


  signOut(){
    this.afAuth.auth.signOut();
  }

}
