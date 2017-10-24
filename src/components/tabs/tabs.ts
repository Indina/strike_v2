import { Component } from '@angular/core';

import { MyStrikesPage } from "../../pages/my-strikes/my-strikes";
import { SwipeStrikesPage } from "../../pages/swipe-strikes/swipe-strikes";
import { WallPage } from "../../pages/wall/wall";
import { PackagesPage } from "../../pages/packages/packages";

/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  templateUrl: 'tabs.html'
})
export class TabsComponent {


  tab1Root = MyStrikesPage;
  tab2Root = SwipeStrikesPage;
  tab3Root = WallPage;
  tab4Root = PackagesPage;

  constructor() {
  }

}
