import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { SwipeStrikesPage } from "./swipe-strikes";








@NgModule({
  declarations: [
    SwipeStrikesPage
  ],
  imports: [
    IonicPageModule.forChild(SwipeStrikesPage)
  ],
  entryComponents: [
    SwipeStrikesPage
  ]
})
export class SwipeStrikesPageModule {}
