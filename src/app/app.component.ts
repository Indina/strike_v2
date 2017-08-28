import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsComponent } from '../components/tabs/tabs'
import { LoginPage } from "../pages/login/login";
import { AuthProvider } from "../providers/auth/auth";
import { UserProvider } from "../providers/user/user";
import { DatabaseProvider } from "../providers/database/database";
import { FirebaseObjectObservable } from "angularfire2/database";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private authProvider:AuthProvider,
    private userProvider: UserProvider,
    private db: DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      statusBar.styleDefault();
      splashScreen.hide();
      this.authProvider.state.subscribe(
        auth=>{
          if(auth){
            this.db.getProfile(auth.uid).subscribe(userProfile=>{
              this.userProvider.userId = auth.uid;
              this.userProvider.profile = userProfile;
              this.rootPage = TabsComponent;


            });
          }
            else{
              this.rootPage=LoginPage;
            }
        });



    });
  }
}
