import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../model/user";
import { LoginPage } from "../login/login";
import { AuthProvider } from "../../providers/auth/auth";
import { UserProvider } from "../../providers/user/user";
import { DatabaseProvider } from "../../providers/database/database";
import { Profile } from "../../model/profile";
import { ProfileEditPage } from "../profile-edit/profile-edit";
import { PreloaderProvider } from "../../providers/preloader/preloader";

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider : AuthProvider,
    public userProvider : UserProvider,
    public db : DatabaseProvider,
    public preloader : PreloaderProvider

  ) {


    this.user = new User();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  async register(){

      try {
        this.preloader.displayPreloader();
        const userResult = await this.authProvider.createUserWithEmailAndPassword(this.user);
        let profile = new Profile();
        let profileResult = await this.db.createProfile(userResult.uid,profile);


        this.navCtrl.push(ProfileEditPage)
        this.preloader.hidePreloader();

      } catch (error) {
        console.log(error);
        this.preloader.hidePreloader();
      }

  };


  goTologinPage(){
    this.navCtrl.push(LoginPage);
  }
}
