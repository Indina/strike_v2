import { Component, QueryList, ViewChild, ViewChildren,AfterViewInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';

import {
  StackConfig,
 /*  Stack,
  Card,
  ThrowEvent,*/
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

import { InviteFriendsPage } from "../inviteFriends/inviteFriends";
import { DatabaseProvider } from "../../providers/database/database";
/**
 * Generated class for the SwipeStrikesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-swipe-strikes',
  templateUrl: 'swipe-strikes.html',
})
export class SwipeStrikesPage implements AfterViewInit {


  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;


  stackConfig: StackConfig;
  recentCard: string = '';



  cards: Array<any>=new Array();


  constructor(public navCtrl: NavController, db:DatabaseProvider, public http:Http) {

     db.getSwipeList().subscribe(items=>{

        items.forEach(item=>{
        this.cards.push(item)


        });


      });




      this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
      },

      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
  }


  }



  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
     // event.target.style.background = 'rgba(255,255,255)';
    });

  }





// Called whenever we drag an element
onItemMove(element, x, y, r) {
  var color = '';
  var abs = Math.abs(x);
  let min = Math.trunc(Math.min(16*16 - abs, 16*16));
  let hexCode = this.decimalToHex(min, 2);

  if(x<0.1 && x>-0.1){
    element.style.background="white";
  } else
  if (x < -0.1) {
    color = '#FF' + hexCode + hexCode;
  } else {
    color = '#' + hexCode + 'FF' + hexCode;
  }

  element.style.background = color;
  element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
}

// Connected through HTML
voteUp(like: boolean) {
  this.cards.pop();

  if (like) {

  } else {
     this.navCtrl.push(InviteFriendsPage);
  }
}

// Add new cards to our array
addNewCards(count: number) {
  this.http.get('https://randomuser.me/api/?results=' + count)
  .map(data => data.json().results)
  .subscribe(result => {
    for (let val of result) {
      this.cards.push(val);
    }
  })
}

// http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
decimalToHex(d, padding) {
  var hex = Number(d).toString(16);
  padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

  while (hex.length < padding) {
    hex = "0" + hex;
  }

  return hex;
}

send(){
this.navCtrl.push(InviteFriendsPage);

}


}
