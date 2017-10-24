import { Component , Input} from '@angular/core';
import {  AngularFirestoreCollection } from 'angularfire2/firestore';
import { NavController } from 'ionic-angular';
import { StrikeDetailsPage } from '../../pages/strike-details/strike-details';
import { Observable } from 'rxjs/Observable';
import { Strike } from "../../model/strike";

/**
 * Generated class for the StrikelistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'strike-list',
  templateUrl: 'strikeList.html'
})
export class StrikeListComponent {


    text: string;

    @Input() strikes: Observable<any[]>;

    constructor(public navCtrl: NavController) {}


    goToStrikeDetails(strike:Strike){
        this.navCtrl.push(StrikeDetailsPage,strike);
    }

    favorite(){}

    share(){}

}
