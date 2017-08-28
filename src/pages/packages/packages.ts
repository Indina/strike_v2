import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PackagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-packages',
  templateUrl: 'packages.html',
})
export class PackagesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }




presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Kjøp pakke',
    message: 'Ønsker du å kjøpe denne pakken?',
    buttons: [
      {
        text: 'Avvis',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Kjøp',
        handler: () => {
          console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
}

}
