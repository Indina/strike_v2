import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Strike } from "../../model/strike";
import { StrikeType } from "../../model/strikeType";
import { StrikeTypeList } from "../../model/strikeTypeList";
import { AngularFirestore } from 'angularfire2/firestore';
import { StrikePoint } from "../../model/strikePoint";
import { Profile } from "../../model/profile";
import { UserProvider } from "../user/user";
import 'firebase/storage';
import * as Uuid from 'uuid-lib'
import { Observable } from "rxjs/Observable";


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private _af : AngularFirestore;
  private _strikeTypes: StrikeType[];



  constructor(public http: Http, private af:AngularFirestore ,
  private userProvider : UserProvider) {
    this._af =af;
    this._strikeTypes =  [
      new StrikeType("Hjertesak", "Hjertesak",'assets/images/elementType/heart.svg'),
      new StrikeType("Helse", "Helse",'assets/images/elementType/fit.svg'),
      new StrikeType("Trendy", "Trendy",'assets/images/elementType/fire.svg'),
      new StrikeType("Selvmestring", "Selvmestring",'assets/images/elementType/creative.svg'),
      new StrikeType("Toxic", "Toxic",'assets/images/elementType/toxic.svg'),
  ]
  }


strikeTypes() : StrikeType[]{

  return this._strikeTypes;


}



strikePoints() : StrikePoint[]{

  return [
      new StrikePoint(80, "Litt vikitg"),
      new StrikePoint(90, "Viktig"),
      new StrikePoint(100, "Esssensielt"),
      new StrikePoint(110, "Fantastisk"),
      new StrikePoint(120, "Nirvana"),
  ]


}

strikeTypeLists() : StrikeTypeList[]{

  return [
      new StrikeTypeList(1, "russ"),
      new StrikeTypeList(2, "swipe"),

  ]


}


saveNewStrike(strike : Strike){




  let thenable =  this._af.collection('strikes¨').add(strike);
  thenable.catch(this.onError);
  return thenable;


}

allStrikes(userId : number = 0) :Observable<any[]>{

    return this._af.collection('strikes¨').valueChanges();

}





getSwipeList() : Observable<any[]>{



return this._af.collection('strikes¨',ref => ref.where("listType", "==", "swipe")).valueChanges();


}

onError(error : Error){}

getProfile(userId:string) : Observable<Profile>{
  let path = `profiles/${userId}`;
  return this._af.doc<Profile>(path).valueChanges();
}

createProfile(userId: string, profile : Profile){
  profile.profileId = Uuid.raw();
  return this._af.doc<Profile>(`profiles/${userId}`).set(profile).then().catch(this.onError);
}



   uploadImage(imageString,name ) : Promise<any>
   {

      let imageName :string  = Uuid.raw();


      let image       : string  = `${imageName}_` + new Date().getTime() + '.jpg',
          storageRef  :any= this._af.app.storage().ref(),
          parseUpload : any;

      return new Promise((resolve, reject) =>
      {
         let imageRef =     storageRef.child(`${this.userProvider.profile.profileId}/`+image);
         parseUpload      = imageRef.putString(imageString, 'data_url');

         parseUpload.on('state_changed', (_snapshot) =>
         {
            // We could log the progress here IF necessary
            // console.log('snapshot progess ' + _snapshot);
         },
         (_err) =>
         {
            reject(_err);
         },
         (success) =>
         {
            resolve(parseUpload.snapshot);
         });
      });
   }





















}
