import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Strike } from "../../model/strike";
import { StrikeType } from "../../model/strikeType";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import { StrikePoint } from "../../model/strikePoint";
import { Profile } from "../../model/profile";
import { UserProvider } from "../user/user";
import 'firebase/storage';
import * as Uuid  from 'uuid-lib'
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private _af : AngularFireDatabase;
  private _strikeTypes: StrikeType[];


  constructor(public http: Http, private af:AngularFireDatabase ,
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




saveNewStrike(strike : Strike){




  let thenable =  this._af.list('/strikes').push(strike);
  thenable.catch(this.onError);
  return thenable;


}

allStrikes(userId : number = 0) : FirebaseListObservable<any[]>{

    return this._af.list('/strikes');

}

onError(error : Error){}

getProfile(userId:string) : FirebaseObjectObservable<Profile>{
  let path = `profiles/${userId}`;
  return this._af.object(path);
}

createProfile(userId: string, profile : Profile){
  profile.profileId = Uuid.raw();
  return this._af.object(`profile/${userId}`).set(profile).then().catch(this.onError);
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
