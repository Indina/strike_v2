import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { NewStrikePage } from "./new-strike";






@NgModule({
  declarations: [
    NewStrikePage
  ],
  imports: [
    IonicPageModule.forChild(NewStrikePage)
  ],
  entryComponents: [
    NewStrikePage
  ]
})
export class NewStrikePageModule {}
