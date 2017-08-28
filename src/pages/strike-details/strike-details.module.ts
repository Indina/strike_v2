import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { StrikeDetailsPage } from "./strike-details";








@NgModule({
  declarations: [
    StrikeDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(StrikeDetailsPage)
  ],
  entryComponents: [
    StrikeDetailsPage
  ]
})
export class StrikeDetailsPageModule {}
