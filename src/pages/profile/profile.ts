import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from "../settings/settings";
import { UserProvider } from "../../providers/user/user";
import { Profile } from "../../model/profile";
import { PackagesPage } from "../packages/packages";
import { AddNewFriendPage } from "../add-new-friend/add-new-friend";

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})




export class ProfilePage {

  profile : Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userProvider: UserProvider) {

      this.profile  = userProvider.profile;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }





goToSettings(){
  this.navCtrl.push(SettingsPage);

}

goToAddNewFriend(){
  this.navCtrl.push(AddNewFriendPage);

}


goToPackages(){
this.navCtrl.push(PackagesPage);

}

}
