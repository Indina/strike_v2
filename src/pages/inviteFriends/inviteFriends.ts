import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InviteFriendsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 
@IonicPage()
@Component({
  selector: 'page-inviteFriends',
  templateUrl: 'inviteFriends.html',
})
export class InviteFriendsPage {


  
 contacts;
    groupedContacts = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InviteFriendsPage');
  }




 searchQuery: string = '';
  items: string[];



  initializeItems() {
    this.items = [
      'Indisstyle',
      'Siripus',
      'Silje',
      'Lars',
      'Fredrik',
      
    ];
    this.groupContacts(this.items);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }




   groupContacts(Items){
 
        let sortedContacts = Items.sort();
        let currentLetter = false;
        let currentContacts = [];
 
        sortedContacts.forEach((value, index) => {
 
            if(value.charAt(0) != currentLetter){
 
                currentLetter = value.charAt(0);
 
                let newGroup = {
                    letter: currentLetter,
                    item: []
                };
 
                currentContacts = newGroup.item;
                this.groupedContacts.push(newGroup);
 
            }
 
            currentContacts.push(value);
 
        });
 
    }
}





