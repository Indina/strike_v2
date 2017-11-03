import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewFriendPage } from './add-new-friend';

@NgModule({
  declarations: [
    AddNewFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewFriendPage),
  ],
})
export class AddNewFriendPageModule {}
