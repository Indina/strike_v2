import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { WallPage } from "./wall";








@NgModule({
  declarations: [
    WallPage
  ],
  imports: [
    IonicPageModule.forChild(WallPage)
  ],
  entryComponents: [
    WallPage
  ]
})
export class WallPageModule {}
