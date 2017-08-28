import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../model/user";
import { RegisterPage } from "../register/register";
import { AuthProvider } from "../../providers/auth/auth";
import { MyStrikesPage } from "../my-strikes/my-strikes";
import { SplashProvider } from "../../providers/splash/splash";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:User;
  sp : SplashProvider;

  constructor( public navCtrl: NavController, public navParams: NavParams,
    public authprovider: AuthProvider,
    sp:SplashProvider) {


    this.user = new User();
      this.sp = sp;
  }

  ionViewDidLoad() {

     if(this.sp.splash===true)
      setTimeout(() =>{
          this.sp.splash=false;
          //this.tabBarElement.style.display = 'flex';
        } , 1000);

  }


  login(){
    this.authprovider.loginWithEmailAndPassword(this.user).
      then((success)=>{
        this.navCtrl.push(MyStrikesPage);
      }).
      catch((error)=>{
        console.log(error);
      });
  };


  register(){
    this.navCtrl.push(RegisterPage);
  }



}
