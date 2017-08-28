import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../model/user";
import { LoginPage } from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {



  user:User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.user = new User();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  register(){

  };


  goTologinPage(){
    this.navCtrl.push(LoginPage);
  }
}
