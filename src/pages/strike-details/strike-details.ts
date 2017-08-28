import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Strike } from "../../model/strike";

/**
 * Generated class for the StrikeDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-strike-details',
  templateUrl: 'strike-details.html',
})
export class StrikeDetailsPage {

  strike: Strike;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.strike  = this.navParams.data as Strike;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StrikeDetailsPage');
  }

}
