import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { DatabaseProvider } from "../../providers/database/database";
import { ProfilePage } from "../profile/profile";
import { NewStrikePage } from "../new-strike/new-strike";
import { SplashProvider } from "../../providers/splash/splash";
import { Observable } from 'rxjs/Observable';



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
  strikes: Observable<any[]>;
  sp:SplashProvider;

  pakker:string ="strikes";

  constructor(public navCtrl:  NavController, db:DatabaseProvider,
    sp:SplashProvider) {



     db.getRussList().subscribe(items=>{

        items.forEach(item=>{
    
 this.strikes = db.allStrikes()

        });


      });


      this.strikes = db.allStrikes()
      this.strikes.forEach(v=>{
        v.toString();
      })
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
