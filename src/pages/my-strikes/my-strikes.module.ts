import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { MyStrikesPage } from "./my-strikes";
import { SplashComponent } from "../../components/splash/splash";






@NgModule({
  declarations: [
    MyStrikesPage,
    SplashComponent
  ],
  imports: [
    IonicPageModule.forChild(MyStrikesPage)
  ],
  entryComponents: [
    MyStrikesPage,
    SplashComponent
  ]
})
export class MyStrikesPageModule {}
