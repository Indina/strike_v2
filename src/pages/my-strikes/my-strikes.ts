import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { FirebaseListObservable } from "angularfire2/database";
import { DatabaseProvider } from "../../providers/database/database";
import { ProfilePage } from "../profile/profile";
import { NewStrikePage } from "../new-strike/new-strike";
import { SplashProvider } from "../../providers/splash/splash";


/**
 * Generated class for the MyStrikesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-strikes',
  templateUrl: 'my-strikes.html',
})
export class MyStrikesPage {

  tabBarElement: any;
  strikes: FirebaseListObservable<any[]>;
  sp:SplashProvider;

  pakker:string ="strikes";

  constructor(public navCtrl: NavController, db:DatabaseProvider,
    sp:SplashProvider) {
      this.strikes = db.allStrikes();
      this.sp = sp;
  }

profile(){
this.navCtrl.push(ProfilePage);

}



newStrike(){
this.navCtrl.push(NewStrikePage);

}

shownGroup = null;


toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

  ionViewDidLoad() {

    if(this.sp.splash===true)
      setTimeout(() =>{
          this.sp.splash=false;
          //this.tabBarElement.style.display = 'flex';
        } , 1000);
     this.tabBarElement = document.querySelector('.tabbar');
 /*     if(this.tabBarElement !==null) {

        this.tabBarElement.style.display = 'none';
        setTimeout(() =>{
          this.tabBarElement.style.display = 'flex';
        } , 1000);
    } */
  }

}
