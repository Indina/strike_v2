import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { MyStrikesPage } from "../pages/my-strikes/my-strikes";
import { ImageProvider } from '../providers/image/image';
import { DatabaseProvider } from '../providers/database/database';
import { PreloaderProvider } from '../providers/preloader/preloader';
import { ComponentsModule } from "../components/components.module";
import { TabsComponent } from "../components/tabs/tabs";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
//import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NewStrikePage } from "../pages/new-strike/new-strike";
import { StrikeDetailsPage } from "../pages/strike-details/strike-details";
import { InviteFriendsPage } from "../pages/inviteFriends/inviteFriends";
import { SplashComponent } from "../components/splash/splash";
import { SwipeStrikesPage } from "../pages/swipe-strikes/swipe-strikes";
import { ProfilePage } from "../pages/profile/profile";
import { SettingsPage } from "../pages/settings/settings";
import { WallPage } from "../pages/wall/wall";
import { RegisterPage } from "../pages/register/register";
import { AuthProvider } from '../providers/auth/auth';
import { SplashProvider } from '../providers/splash/splash';
import { UserProvider } from '../providers/user/user';
import { FileProvider } from '../providers/file/file';
import { PackagesPage } from "../pages/packages/packages";
import { SwingModule } from 'angular2-swing';
import { ProfileEditPage } from "../pages/profile-edit/profile-edit";





export const firebaseConfig = {
    apiKey: "AIzaSyCQKyGrADrwvWaXsBBqCqcx8DEbrtjhmoA",
    authDomain: "strike-43aa1.firebaseapp.com",
    databaseURL: "https://strike-43aa1.firebaseio.com",
    projectId: "strike-43aa1",
    storageBucket: "strike-43aa1.appspot.com",
    messagingSenderId: "503675062650"
};



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MyStrikesPage,
    NewStrikePage,
    StrikeDetailsPage,
    SwipeStrikesPage,
    ProfilePage,
    SettingsPage,
    WallPage,
    InviteFriendsPage,
    RegisterPage,
    PackagesPage,
    ProfileEditPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      backButtonIcon:'ios-arrow-back',
      iconMode:'md'
    }),
    AngularFireModule.initializeApp(firebaseConfig,"strike"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    SwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MyStrikesPage,
    TabsComponent,
    NewStrikePage,
    StrikeDetailsPage,
    SplashComponent,
    InviteFriendsPage,
    SwipeStrikesPage,
    ProfilePage,
    SettingsPage,
    WallPage,
    RegisterPage,
    PackagesPage,
    ProfileEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImageProvider,
    DatabaseProvider,
    PreloaderProvider,
    Camera,
    AuthProvider,
    SplashProvider,
    UserProvider,
    FileProvider
  ]
})
export class AppModule {}
