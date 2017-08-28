import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StrikeListComponent } from './strikelist/strikelist';
import { TabsComponent } from './tabs/tabs';
import { SplashComponent } from './splash/splash';
@NgModule({
	declarations: [
    StrikeListComponent,
    TabsComponent,
    SplashComponent
  ],
	imports: [
    IonicPageModule.forChild(StrikeListComponent)
  ],
	exports: [
    StrikeListComponent,
    TabsComponent,
    SplashComponent
  ]
})
export class ComponentsModule {}
