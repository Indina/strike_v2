import { Component, Input } from '@angular/core';

/**
 * Generated class for the SplashComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'splash',
  templateUrl: 'splash.html'
})
export class SplashComponent {

 @Input() splash : boolean;

  constructor() {}

}
